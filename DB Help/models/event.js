const db = require('../connection');
const Sequelize = require('sequelize');

var Event = db.define('Event', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    eventName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventHost: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    eventDescription: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    eventTime: {
      type: Sequelize.TIME,
      allowNull: false
    },
    eventLocationStreet: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventLocationCity: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventLocationState: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventLocationZipCode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventMainDishesNeeded: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventSideDishesNeeded: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventDessertsNeeded: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    eventNumberInvited: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
}, {
  timestamps: false,
});

Event.sync();

module.exports = Event;
