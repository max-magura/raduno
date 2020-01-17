DROP DATABASE IF EXISTS radunoDB;
CREATE DATABASE radunoDB;
USE radunoDB;

CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(200) NOT NULL,
  userPassword VARCHAR(200) NOT NULL,
  firstName VARCHAR(150) NOT NULL,
  lastName VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- INSERT INTO User (username, userPassword, firstName, lastName, email) values ('Agraves', 'austin', 'Austin', 'Graves', 'austingraves@email.com'),
-- ('Mmagura', 'max', 'Max', 'Magura', 'maxmagura@email.com'), 
-- ('Snelson', 'scott', 'Scott', 'Nelson', 'scottnelson@email.com'),
-- ('Jbuentello', 'joel', 'Joel', 'Buentello', 'joelbuentello@email.com');

CREATE TABLE Events (
	id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT NOT NULL,
	eventName VARCHAR(255) NOT NULL,
	eventHost VARCHAR(255) NOT NULL,
	eventNumberInvited INT NOT NULL,
	eventDescription VARCHAR(255) NOT NULL,
	eventLocationStreet VARCHAR(255) NOT NULL,
	eventLocationCity VARCHAR(255) NOT NULL,
	eventLocationState VARCHAR(255) NOT NULL,
	eventLocationZipCode INT NOT NULL,
	eventDate DATE NOT NULL,
	eventTime VARCHAR(100) NOT NULL,
	eventMainDishesNeeded INT NOT NULL,
	eventSideDishesNeeded INT NOT NULL,
	eventDessertsNeeded INT NOT NULL 
);

INSERT INTO Events (user_id, eventName, eventHost, eventNumberInvited, eventDescription, eventLocationStreet, eventLocationCity, eventLocationState, eventLocationZipCode, eventDate, eventTime, eventMainDishesNeeded, eventSideDishesNeeded, eventDessertsNeeded) 
values 
(1, 'Event 1', 'Austin Graves', 10,'This is for Event 1 description. blah blah blah blah blah blah blah blah blah blah blah blah','101 East Main Street', 'Gallatin', 'Tennessee', '37066', '2020/10/24', '7:00PM', 3, 6, 10),
(2, 'Event 2', 'Max Magura',7,'This is for Event 2 description. blah blah blah blah blah blah blah blah blah blah blah blah','101 East Main Street', 'Portland', 'Tennessee', '37148', '2020/09/24', '7:00PM', 7, 3, 8),
(1, 'Event 6', 'Scott Nelsen', 4,'This is for Event 6 description. blah blah blah blah blah blah blah blah blah blah blah blah','101 East Main Street', 'Portland', 'Tennessee', '37148', '2019/01/24', '7:00PM', 7, 3, 8);

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



















