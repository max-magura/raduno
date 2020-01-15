const Sequelize = require('sequelize');
const db = require('../connection');

var RSVP = db.define('RSVP', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  event_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  rsvpName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  rsvpNumberInParty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      len: [1]
    }
  },  
  rsvpTypeofDish: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  rsvpNameofDish: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  }
}, {
  timestamps: false,
  freezeTableName: true
});

RSVP.sync();

module.exports = RSVP;
