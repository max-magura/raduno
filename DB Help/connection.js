const { Sequelize } = require('sequelize');

var db = new Sequelize('radunoDB', 'active', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});