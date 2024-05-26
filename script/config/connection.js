import Sequelize from 'sequelize';
const sequelize = new Sequelize('gestaovoluntarios', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
})

export default sequelize;