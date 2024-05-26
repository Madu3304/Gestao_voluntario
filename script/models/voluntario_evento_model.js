import Sequelize from "sequelize";
import sequelize from "../config/connection.js";
import Voluntario from "./voluntario.model.js";
import Evento from "./evento_model.js";

const Voluntario_Evento = sequelize.define('voluntario_evento',{
    cd_voluntario_evento:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dt_cadastro:{
        type: Sequelize.DATEONLY
    }
})

Voluntario.belongsToMany(Evento,{
    through:{
        model:Voluntario_Evento
    },
    foreignKey: 'cd_voluntario',
    constraint: true
})

Evento.belongsToMany(Voluntario,{
    through:{
        model:Voluntario_Evento
    },
    foreignKey: 'cd_evento',
    constraint: true
})

export default Voluntario_Evento