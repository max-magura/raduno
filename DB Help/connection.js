const { Sequelize } = require('sequelize');

var db = new Sequelize('radunoDB', 'root', 'Saleen_454', {
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