import { where } from "sequelize"
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
        const {categoriaEvento, nomeEvento, dt_evento, descricaoEvento, tp_projeto, cd_cidade, cd_estado} = req.body
        const novoEvento = await Evento.create({
            // nomeEvento,
            // categoriaEvento,
            // cidadeEvento,
            // horarioEvento,
            // descricaoEvento
            categoria_evento: categoriaEvento,
            nome_evento: nomeEvento,
            dt_evento: dt_evento,
            ds_evento: descricaoEvento,
            tp_projeto: tp_projeto,
            cd_cidade: cd_cidade,
            cd_estado: cd_estado
        })
        res.send(novoEvento)
    } catch (e) {
        console.log('Erro ao tentar criar um novo evento......', e)
    }
}

evento.updateEvento = async(req,res) => {
    try {
        const {cd_evento} = req.params
        const {dt_evento, ds_evento, tp_projeto, cd_cidade, cd_estado} = req.body

        await Evento.update(
            {
                dt_evento: dt_evento,
                ds_evento: ds_evento,
                tp_projeto: tp_projeto,
                cd_cidade: cd_cidade,
                cd_estado: cd_estado,
            },
            {where: {cd_evento: cd_evento}}
        )
        const eventoAtualizado = await Evento.findByPk(cd_evento)

        res.send(eventoAtualizado)
    } catch (e) {
        console.log('Erro ao tentar alterar um evento.......', e)
    }
}

evento.deleteEvento = async(req,res)=>{
    try {
        const {cd_evento} = req.params
        await Evento.destroy({
            where: {cd_evento:cd_evento}
        })

        res.send({message: 'Evento deletado com sucesso'})
    } catch (e) {
        console.log('Erro ao tentar deletar um evento......', e)
    }
}

export {evento}