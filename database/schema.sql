-- Fields table
CREATE TABLE Fields (
    field_id INT PRIMARY KEY,
    name VARCHAR(255),
    area FLOAT,
    location VARCHAR(255),
    soil_type VARCHAR(255)
);

-- Crops table
CREATE TABLE Crops (
    crop_id INT PRIMARY KEY,
    name VARCHAR(255),
    planting_date DATE,
    harvest_date DATE,
    quantity INT,
    field_id INT,
    sensor_id INT,
    FOREIGN KEY (field_id) REFERENCES Fields(field_id),
    FOREIGN KEY (sensor_id) REFERENCES Sensors(sensor_id)
);

-- Sensors table
CREATE TABLE Sensors (
    sensor_id INT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    field_id INT,
    installation_date DATE,
    FOREIGN KEY (field_id) REFERENCES Fields(field_id)
);
