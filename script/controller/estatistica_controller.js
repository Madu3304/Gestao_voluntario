import sequelize from './config/connection.js';

let evento_contagem = {};

evento_contagem.getCountEventos = async (req, res) => {
  try {
    const [result] = await sequelize.query('SELECT COUNT(*) AS totalEventos FROM Eventos');
    
    if (!result || !result[0] || !result[0].totalEventos) {
      throw new Error('Erro ao obter contagem de eventos.');
    }

    res.json({ totalEventos: result[0].totalEventos });
  } catch (e) {
    console.error('Erro ao contar eventos:', e);
    res.status(500).send('Erro ao contar os eventos.');
  }
};

let voluntario_contagem = {};

voluntario_contagem.getCountVoluntarios = async (req, res) => {
  try {
    const [result] = await sequelize.query('SELECT COUNT(*) AS totalVoluntarios FROM Voluntarios');

    if (!result || !result[0] || !result[0].totalVoluntarios) {
      throw new Error('Erro ao obter contagem de voluntários.');
    }

    res.json({ totalVoluntarios: result[0].totalVoluntarios });
  } catch (e) {
    console.error('Erro ao contar voluntários:', e);
    res.status(500).send('Erro ao contar os voluntários.');
  }
};

// let voluntario_ranking = {};

// voluntario_ranking.getRankingVoluntario = async (req, res) => {
//   try {
//     const [result] = await sequelize.query('SELECT * FROM Voluntarios ORDER BY ? DESC LIMIT 3');

//     if (!result) {
//       throw new Error('Nenhum resultado encontrado para o ranking de voluntários.');
//     }

//     res.json(result);
//   } catch (e) {
//     console.error('Erro ao listar o ranking de voluntários:', e);
//     res.status(500).send('Erro ao listar o ranking de voluntários.');
//   }
// };

export { voluntario_contagem, evento_contagem, /* voluntario_ranking */ };
