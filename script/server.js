import sequelize from './config/connection.js';
import Estado from './models/estado_models.js';
import Voluntario from './models/voluntario.model.js';
import Usuario from './models/usuario_model.js';

(async () => {

try {
    //await sequelize.drop();
    await sequelize.sync();
    console.log('Tabela Sincronizada')
} catch (error) {
    console.log('Erro.................', error)
}

})()


