CREATE DATABASE IF NOT EXISTS timetracking;

GRANT USAGE ON *.* TO 'testuser_abc'@'localhost' IDENTIFIED BY 'Testpassw0rd_abc';
GRANT ALL PRIVILEGES ON timetracking.* TO 'testuser_abc'@'localhost';

FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  is_admin TINYINT NOT NULL DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO Users (username, password, is_admin, createdAt, updatedAt) VALUES
('user1', 'password1', 0, NOW(), NOW()),
('user2', 'password2', 0, NOW(), NOW()),
('user3', 'password3', 0, NOW(), NOW()),
('verwaltung', 'password_verwaltung', 1, NOW(), NOW());