
const eventoModel = require('../models/evento-model');


function listarEventos(req, res) {

  const eventosx = eventoModel.listar();

  //eventos -> eventos.ejs da pasta view// 
  res.render('eventos', {eventosx});
}

module.exports = {
  listarEventos
};