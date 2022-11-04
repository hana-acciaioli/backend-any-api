-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS plants_botany;

CREATE TABLE plants_botany (
    id BIGINT GENERATED ALWAYS AS IDENTITY, 
    biome_name VARCHAR NOT NULL,
    material VARCHAR NOT NULL,
    base_material VARCHAR NOT NULL,
    scan_for_material VARCHAR NOT NULL,
    plant_density FLOAT NOT NULL

);

INSERT INTO plants_botany (biome_name, material, base_material, scan_for_material, plant_density)
VALUES
('BIRCH_FOREST', 'LONG_GRASS:1', 'GRASS', 'LONG_GRASS:1', 0.03000),
('MESA', 'CACTUS:0', 'SAND', 'CACTUS:0', 0.00200),
('MESA', 'SAPLING:0', 'GRASS', 'LEAVES:0', 0.1), 
('MESA', 'SAPLING:0', 'DIRT', 'LEAVES:0', 0.1);

DROP TABLE IF EXISTS climbing_towns;

CREATE TABLE climbing_towns (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    nearest_climbing_destination VARCHAR NOT NULL,
    climb_months INT NOT NULL,
    population INT NOT NULL
);

INSERT INTO climbing_towns (name, nearest_climbing_destination, climb_months, population)
VALUES
('Redmond Oregon', 'Smith Rock State Park', 12, 35000),
('Index Washington', 'Index', 7, 156),
('St George Utah', 'Snow Canyon', 7, 99958 );

