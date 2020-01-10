DROP DATABASE IF EXISTS radunoDB;
CREATE DATABASE radunoDB;
USE radunoDB;

CREATE TABLE Users (
	id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  userPassword VARCHAR(200) NOT NULL,
  firstName VARCHAR(150) NOT NULL,
  lastName VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO Users (username, userPassword, firstName, lastName, email) values ('Agraves', 'austin', 'Austin', 'Graves', 'austingraves@email.com'),
('Mmagura', 'max', 'Max', 'Magura', 'maxmagura@email.com'), 
('Snelson', 'scott', 'Scott', 'Nelson', 'scottnelson@email.com'),
('Jbuentello', 'joel', 'Joel', 'Buentello', 'joelbuentello@email.com');

CREATE TABLE Events (
	id INT AUTO_INCREMENT PRIMARY KEY,
	eventName VARCHAR(255) NOT NULL,
	eventNumberInvited INT NOT NULL,
	eventDescription VARCHAR(255) NOT NULL,
	eventLocationStreet VARCHAR(255) NOT NULL,
	eventLocationCity VARCHAR(255) NOT NULL,
	eventLocationState VARCHAR(255) NOT NULL,
	eventLocationZipCode INT NOT NULL,
	eventDate DATE NOT NULL,
  eventTime TIME NOT NULL,
	eventMainDishesNeeded INT NOT NULL,
	eventSideDishesNeeded INT NOT NULL,
	eventDessertsNeeded INT NOT NULL 
);

INSERT INTO Events (eventName, eventNumberInvited, eventDescription, eventLocationStreet, eventLocationCity, eventLocationState, eventLocationZipCode, eventDate, eventTime, eventMainDishesNeeded, eventSideDishesNeeded, eventDessertsNeeded) 
values 
('Event 1', 10, 2, 'This is for Event 1 description. blah blah blah blah blah blah blah blah blah blah blah blah', 'Austin Graves', '101 East Main Street', 'Gallatin', 'Tennessee', '37066', '10/24/2020', '7:00PM', 3, 6, 10),
('Event 2', 7, 5, 'This is for Event 2 description. blah blah blah blah blah blah blah blah blah blah blah blah', 'Scott Nelson', '630 Main Street', 'Hendersonville', 'Tennessee', '37075', '09/29/2020', '6:30PM', 5, 3, 7),
('Event 3', 6, 2, 'This is for Event 3 description. blah blah blah blah blah blah blah blah blah blah blah blah', 'Joel Buentello', '1025 Main Street', 'Nashville', 'Tennessee', '37201', '12/27/2019', '7:30PM', 10, 4, 8),
('Event 4', 9, 6, 'This is for Event 4 description. blah blah blah blah blah blah blah blah blah blah blah blah', 'Max Magura', '10289 Main Street', 'Portland', 'Tennessee', '37148', '08/20/2019', '6:30PM', 13, 20, 10);

CREATE TABLE RSVP (
	id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT NOT NULL,
  rsvpName VARCHAR(200) NOT NULL,
  rsvpNumberInParty INT NOT NULL,
  rsvpNameofDish VARCHAR(255) NOT NULL,
  rsvpTypeofDish VARCHAR(200) NOT NULL
);

INSERT INTO RSVP (event_id, rsvpName, rsvpNumberInParty, rsvpNameofDish, rsvpTypeofDish) values 
(1, 'Austin Graves', 6, 'Spaghetti', 'Main'),
(3, 'Max Magura', 3, 'Lasagna', 'Side'),
(8, 'Scott Nelson', 6, 'Meatloaf', 'Main'),
(12, 'Joel Buentello', 8, 'Cheesecake', 'Dessert');



















