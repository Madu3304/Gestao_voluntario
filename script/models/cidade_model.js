import Sequelize  from "sequelize";
import sequelize from '../config/connection.js';
import Estado from "./estado_models.js";

const Cidade = sequelize.define('cidade',{
    cd_cidade:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ds_cidade:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


Cidade.belongsTo(Estado,{
    constraint: true,
    foreignKey: 'cd_estado'
})

Estado.hasMany(Cidade,{
    foreignKey: 'cd_estado'
})



export default Cidade;