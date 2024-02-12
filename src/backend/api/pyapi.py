from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///agriculture.db'  # Change the database URI as per your setup
db = SQLAlchemy(app)

# Define models
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

class Sensor(db.Model):
    sensor_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    type = db.Column(db.String(255))
    field_id = db.Column(db.Integer, db.ForeignKey('field.field_id'))
    installation_date = db.Column(db.Date)

# Routes
@app.route('/crops', methods=['GET'])
def get_crops():
    crops = Crop.query.all()
    crop_list = []
    for crop in crops:
        crop_list.append({
            'crop_id': crop.crop_id,
            'name': crop.name,
            'planting_date': crop.planting_date.strftime('%Y-%m-%d'),
            'harvest_date': crop.harvest_date.strftime('%Y-%m-%d'),
            'quantity': crop.quantity,
            'field_id': crop.field_id
        })
    return jsonify({'crops': crop_list})

@app.route('/fields', methods=['GET'])
def get_fields():
    fields = Field.query.all()
    field_list = []
    for field in fields:
        field_list.append({
            'field_id': field.field_id,
            'name': field.name,
            'area': field.area,
            'location': field.location,
            'soil_type': field.soil_type
        })
    return jsonify({'fields': field_list})

@app.route('/sensors', methods=['GET'])
def get_sensors():
    sensors = Sensor.query.all()
    sensor_list = []
    for sensor in sensors:
        sensor_list.append({
            'sensor_id': sensor.sensor_id,
            'name': sensor.name,
            'type': sensor.type,
            'field_id': sensor.field_id,
            'installation_date': sensor.installation_date.strftime('%Y-%m-%d')
        })
    return jsonify({'sensors': sensor_list})

if __name__ == '__main__':
    app.run(debug=True)
