const {sequelize, Sequelize} = require('./db');

module.exports = sequelize.define('leitura', {
  temperatura: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  umidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  criadoEm: {
    type: Sequelize.DATE,
    default: Sequelize.NOW
  }
})
