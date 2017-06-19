const {sequelize, Sequelize} = require('./db');

module.exports = sequelize.define('leitura', {
  temperatura: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  umidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})
