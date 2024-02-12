from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///agriculture.db'
db = SQLAlchemy(app)

class Crop(db.Model):
    crop_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    planting_date = db.Column(db.Date)
    harvest_date = db.Column(db.Date)
    quantity = db.Column(db.Integer)
    field_id = db.Column(db.Integer, db.ForeignKey('field.field_id'))

class Field(db.Model):
    field_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    area = db.Column(db.Float)
    location = db.Column(db.String(255))
    soil_type = db.Column(db.String(255))
    crops = db.relationship('Crop', backref='field', lazy=True)
    sensors = db.relationship('Sensor', backref='field', lazy=True)

class Sensor(db.Model):
    sensor_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    type = db.Column(db.String(255))
    field_id = db.Column(db.Integer, db.ForeignKey('field.field_id'))
    installation_date = db.Column(db.Date)

# Endpoint to get all crops
@app.route('/crops', methods=['GET'])
def get_crops():
    crops = Crop.query.all()
    output = []
    for crop in crops:
        crop_data = {}
        crop_data['crop_id'] = crop.crop_id
        crop_data['name'] = crop.name
        crop_data['planting_date'] = crop.planting_date.strftime('%Y-%m-%d')
        crop_data['harvest_date'] = crop.harvest_date.strftime('%Y-%m-%d')
        crop_data['quantity'] = crop.quantity
        crop_data['field_id'] = crop.field_id
        output.append(crop_data)
    return jsonify({'crops': output})

# Endpoint to create a new crop
@app.route('/crops', methods=['POST'])
def create_crop():
    data = request.get_json()
    new_crop = Crop(
        name=data['name'],
        planting_date=data['planting_date'],
        harvest_date=data['harvest_date'],
        quantity=data['quantity'],
        field_id=data['field_id']
    )
    db.session.add(new_crop)
    db.session.commit()
    return jsonify({'message': 'Crop created successfully'}), 201

# Endpoint to update an existing crop
@app.route('/crops/<int:crop_id>', methods=['PUT'])
def update_crop(crop_id):
    crop = Crop.query.get(crop_id)
    if not crop:
        return jsonify({'error': 'Crop not found'}), 404
    data = request.get_json()
    crop.name = data['name']
    crop.planting_date = data['planting_date']
    crop.harvest_date = data['harvest_date']
    crop.quantity = data['quantity']
    crop.field_id = data['field_id']
    db.session.commit()
    return jsonify({'message': 'Crop updated successfully'})

# Endpoint to delete a crop
@app.route('/crops/<int:crop_id>', methods=['DELETE'])
def delete_crop(crop_id):
    crop = Crop.query.get(crop_id)
    if not crop:
        return jsonify({'error': 'Crop not found'}), 404
    db.session.delete(crop)
    db.session.commit()
    return jsonify({'message': 'Crop deleted successfully'})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
