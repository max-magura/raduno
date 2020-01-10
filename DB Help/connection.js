const { Sequelize } = require('sequelize');

var db = new Sequelize('radunoDB', 'root', 'Saleen_454', {
  host: '127.0.0.1',
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

module.exports = db;