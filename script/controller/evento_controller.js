import sequelize from "../config/connection.js"
import Evento from "../models/evento_model.js"

let evento = {}

evento.getEventos = async(req, res)=>{
    try {
        const eventos = await Evento.findAll()
        res.send(eventos)
    } catch (e) {
        console.log("Erro ao tentar pegar todos os eventos......", e)
    }
}

evento.createEvento = async(req, res)=>{
    try {
        const {dt_evento, ds_evento, tp_projeto, cd_cidade, cd_estado} = req.body
        const novoEvento = Evento.create({
            dt_evento: dt_evento,
            ds_evento: ds_evento,
            tp_projeto: tp_projeto,
            cd_cidade: cd_cidade,
            cd_estado: cd_estado
        })
        res.send(novoEvento)
    } catch (e) {
        console.log('Erro ao tentar criar um novo evento......', e)
    }
}

export {evento}