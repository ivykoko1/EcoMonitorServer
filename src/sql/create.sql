CREATE DATABASE IF NOT EXISTS ecomonitor;
USE ecomonitor;
CREATE TABLE sensor_readings 
    (epoch TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, ip_address VARCHAR(25) NOT NULL, 
    humidity FLOAT(3,2), temperature FLOAT(3,2), PRIMARY KEY(epoch, ip_address));
CREATE USER IF NOT EXISTS 'ecomonitor'@'localhost' IDENTIFIED BY 'ecoecomonitor';
GRANT ALL PRIVILEGES on ecomonitor.* TO 'ecomonitor'@'localhost';
FLUSH PRIVILEGES; 