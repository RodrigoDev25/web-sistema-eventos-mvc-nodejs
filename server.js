const express = require('express')
const app = express()
const eventoController = require('./controllers/evento-controller')
const participanteController = require('./controllers/participante-controller')



app.get('/eventos', eventoController.listarEventos)
app.get('/participantes', participanteController.listarParticipantes)

app.set('view engine', 'ejs')
app.set('views', './view')


app.listen(8000, () => {
  console.log('Servidor escutando na porta 8000');
});