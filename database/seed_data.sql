
INSERT INTO Fields (field_id, name, area, location, soil_type)
VALUES
    (1, 'Field A', 100.5, 'Coordinates A', 'Loam'),
    (2, 'Field B', 150.2, 'Coordinates B', 'Silt');


INSERT INTO Crops (crop_id, name, planting_date, harvest_date, quantity, field_id)
VALUES
    (1, 'Corn', '2023-03-01', '2023-07-01', 500, 1),
    (2, 'Wheat', '2023-04-15', '2023-08-15', 700, 2);


INSERT INTO Sensors (sensor_id, name, type, field_id, installation_date)
VALUES
    (1, 'Temperature Sensor', 'Temperature', 1, '2023-01-15'),
    (2, 'Humidity Sensor', 'Humidity', 2, '2023-02-10');
