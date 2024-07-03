import Evento from "../models/evento_model.js"
import Voluntario from "../models/voluntario.model.js";
import Voluntario_Evento from "../models/voluntario_evento_model.js";

let evento = {};

evento.getCountEventos = async (req, res) => {
  try {
    const [eventos] = await sequelize.query('SELECT COUNT(*) FROM Eventos');
    res.send(eventos);
  } catch (e) {
    console.error('Erro ao tentar pegar todos os eventos:', e);
    res.status(500).send('Erro ao tentar pegar todos os eventos');
  }
};