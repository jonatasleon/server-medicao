const Leitura = require('../models/Leitura');

module.exports = {
  create: (req, res, next) => {
    const body = req.body

    console.log(req.body);

    const leitura = {
      umidade: body.humidity,
      temperatura: body.temperature
    }

    Leitura.create(leitura)
      .then(leitura => {
        res.json(leitura);
      })
      .catch(err => {
        res.status(500).json(err)
      })

  },
  getAll: (req, res, next) => {
    Leitura.findAll()
      .then(leituras => {
        res.json(leituras)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}
