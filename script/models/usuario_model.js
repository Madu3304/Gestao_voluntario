import  Sequelize  from "sequelize";
import sequelize from "../config/connection.js";


const Usuario = sequelize.define('usuario',{
    cd_usuario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dt_cadastro:{
        type: Sequelize.DATEONLY
    },
    email:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    },
    tp_permissao:{
        type: Sequelize.INTEGER
    }
})

export default Usuario