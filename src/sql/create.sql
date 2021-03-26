
CREATE DATABASE IF NOT EXISTS ecomonitor;
USE ecomonitor;
CREATE TABLE IF NOT EXISTS user
    (id INT NOT NULL PRIMARY KEY, username VARCHAR(30) NOT NULL UNIQUE, p_hash VARCHAR(255) NOT NULL, installation_id INT DEFAULT 1); /*Add foreign key*/
CREATE TABLE IF NOT EXISTS sensor_node
    (id INT NOT NULL AUTO_INCREMENT, owner_id INT NOT NULL, ip_address VARCHAR(25) NOT NULL, PRIMARY KEY(id, owner_id), FOREIGN KEY(owner_id) REFERENCES user(id));
CREATE TABLE IF NOT EXISTS sensor_reading
    (id INT NOT NULL AUTO_INCREMENT, node_id INT NOT NULL,epoch TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    humidity FLOAT(3,2), temperature FLOAT(3,2), PRIMARY KEY(id, node_id, epoch)); /*FOREIGN KEY(node_id) REFERENCES sensor_node(id)*/
CREATE USER IF NOT EXISTS 'ecomonitor'@'localhost' IDENTIFIED BY 'ecoecomonitor';
GRANT ALL PRIVILEGES on ecomonitor.* TO 'ecomonitor'@'localhost';
FLUSH PRIVILEGES; 