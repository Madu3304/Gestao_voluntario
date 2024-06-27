import Voluntario from '../models/Voluntario';
import { Sequelize } from 'sequelize';


// filtro
const filterOptions = {
    voluntario: {
        type: 'string',
        operator: Sequelize.Op.like // parecido
    },
    cd_voluntario: {
        type: 'string',
        operator: Sequelize.Op.eq // parecido
    },
    ie_cancelado: {
        type: 'string',   
        operator: Sequelize.Op.eq // igual
    }
};

function Where(req) {

    const where = {};
    const { data, voluntario } = req.query;

    if (voluntario && filteringOptions.voluntario) {
        where.nm_voluntario = {
            [filteringOptions.voluntario.operator]: `%${voluntario}%`,
        };
    }

    if(cd_voluntario && filterOptions.cd_voluntario) {
        where.cd_voluntario = {
            [filterOptions.cd_voluntario.operator]: cd_voluntario,
        }
    }

    if (ie_cancelado && filteringOptions.ie_cancelado) {
        where.ie_cancelado = {
            [filteringOptions.ie_cancelado.operator]: ie_cancelado,
        };
    }

    return where;
}


// contagem de voluntarios
const id = parseInt(req.params.id);

const voluntarios = await sequelize
        .query('SELECT COUNT(*) FROM voluntario WHERE id = ?', {
  replacements: [id],
  type: Sequelize.QueryTypes.SELECT
});