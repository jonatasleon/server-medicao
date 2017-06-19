const Sequelize = require('sequelize')
const path = require('path')
const fs = require('fs')


const settings = {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: './db.sqlite'
}

const sequelize = new Sequelize('db', '', '', settings);

const loadModels = (sequelize) => {
  const dir = path.join(__dirname, '../models');
  const models = [];

  fs.readdirSync(dir).forEach((file) => {
    const modelPath = path.join(dir, file);
    const model = sequelize.import(modelPath);
    models[model.name] = model;
  });

  return models;
};

sequelize.sync()

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

module.exports = {sequelize, Sequelize}
