import Sequelize from "sequelize";
import sequelize from "../config/connection.js";

const Voluntario = sequelize.define('voluntario',{
    cd_voluntario:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nm_voluntario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    ie_cancelado:{
        type: Sequelize.STRING
    },
    dt_cancelado:{
        type: Sequelize.DATEONLY
    }
})

export default Voluntario;