const Leitura = require('../models/Leitura');

module.exports = {
  create: (req, res, next) => {
    const body = req.body;

    const leitura = {
      temperatura: body.humidity,
      umidade: body.temperature
    }

    Leitura.create(leitura)
      .then(leitura => {
        res.json(leitura);
      })
      .catch(err => {
        res.status(500).json(err)
      })

  }
}
