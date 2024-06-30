import Sequelize  from "sequelize";
import sequelize from "../config/connection.js";
import Cidade from "./cidade_model.js";
import Estado from "./estado_models.js";

const Evento = sequelize.define('evento',{
    cd_evento:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dt_evento:{
        type: Sequelize.DATEONLY
    },
    ds_evento:{
        type: Sequelize.STRING
    },
    tp_projeto:{
        type: Sequelize.STRING
    },
    categoria_evento:{
        type: Sequelize.STRING
    },
    nome_evento:{
        type: Sequelize.STRING
    }
})

Evento.belongsTo(Cidade,{
    constraint: true,
    foreignKey: 'cd_cidade' 
})

Cidade.hasMany(Evento,{
    foreignKey: 'cd_cidade'
})


Evento.belongsTo(Estado,{
    constraint: true,
    foreignKey: 'cd_estado'
})

Estado.hasMany(Evento,{
    foreignKey: 'cd_estado'
})


export default Evento