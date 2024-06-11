import Sequelize from 'sequelize';
import sequelize from '../config/connection.js';


const Estado = sequelize.define('estado',{
    cd_estado:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ds_estado:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
})

export default Estado;