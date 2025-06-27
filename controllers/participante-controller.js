
const participanteModel = require('../models/participante-model');


function listarParticipantes(req, res) {

  const participantesx = participanteModel.listar();

  //participantes -> participantes.ejs da pasta view// 
  res.render('participantes', {participantesx});
}

module.exports = {
  listarParticipantes
};