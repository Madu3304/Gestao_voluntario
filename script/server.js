import sequelize from './config/connection.js';
import Estado from './models/estado_models.js';
import Voluntario from './models/voluntario.model.js';
import Usuario from './models/usuario_model.js';
import Cidade from './models/cidade_model.js';
import Evento from './models/evento_model.js';
import Voluntario_Evento from './models/voluntario_evento_model.js';

const valores = {};

const syncDatabase = async () => {
  try {
    await sequelize.drop();
    await sequelize.sync();

    // Estados
    const novoEstado = await Estado.create({
      ds_estado: 'Santa Catarina'
    });
    const novoEstado2 = await Estado.create({
      ds_estado: 'Sao Paulo'
    });

    // Cidades
    const novaCidade = await Cidade.create({
      ds_cidade: 'Joinville',
      cd_estado: novoEstado.cd_estado
    });
    const novaCidade2 = await Cidade.create({
      ds_cidade: 'Sao Paulo',
      cd_estado: novoEstado2.cd_estado
    });

    // Voluntarios
    const novoVoluntario = await Voluntario.create({
      nm_voluntario: 'Luiz',
      email: 'lschrodermarcon@gmail.com',
      endereco: 'Rua Alzira Adelia de Santana',
      ie_cancelado: 's',
      dt_cancelado: '2024-05-26'
    });

    // Eventos
    const novoEvento = await Evento.create({
      dt_evento: '2024-05-26',
      ds_evento: 'Evento',
      tp_projeto: 'Projeto',
      cd_cidade: novaCidade.cd_cidade,
      cd_estado: novoEstado.cd_estado
    });

    // Voluntario Eventos
    const novoVoluntarioEvento = await Voluntario_Evento.create({
      dt_cadastro: '2024-05-26',
      cd_voluntario: novoVoluntario.cd_voluntario,
      cd_evento: novoEvento.cd_evento
    });

    valores.novoEstado = novoEstado;
    valores.novoEstado2 = novoEstado2;
    valores.novaCidade = novaCidade;
    valores.novaCidade2 = novaCidade2;
    valores.novoVoluntario = novoVoluntario;
    valores.novoEvento = novoEvento;
    valores.novoVoluntarioEvento = novoVoluntarioEvento;

    console.log('Tabela Sincronizada');
  } catch (error) {
    console.log('Erro.................', error);
  }
};

await syncDatabase();

export default valores;
