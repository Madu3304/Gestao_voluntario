import { where } from "sequelize";
import Voluntario_Evento from "../models/voluntario_evento_model.js";

const voluntario_evento = {}

voluntario_evento.getVoluntarioEvento = async(req,res)=>{
    try {
        const voluntariosEventos = await Voluntario_Evento.findAll()
        res.send(voluntariosEventos)
    } catch (e) {
        console.log("Erro ao tentar consulta Voluntario Eventos.....", e)
    }
}

voluntario_evento.createVoluntarioEvento = async(req,res)=>{
    try {
        const {dt_cadastro, cd_voluntario, cd_evento} = req.body
        const novoVoluntarioEvento = await Voluntario_Evento.create({
            dt_cadastro: dt_cadastro,
            cd_voluntario: cd_voluntario,
            cd_evento: cd_evento
        })
        res.send(novoVoluntarioEvento)
    } catch (e) {
        console.log("Erro ao tentar criar uma nova relação entre voluntario e evento......", e)
    }
}

voluntario_evento.updateVoluntarioEvento = async(req,res)=>{
    try {
        const {cd_voluntario_evento} = req.params
        const {dt_cadastro, cd_voluntario, cd_evento} = req.body

        await Voluntario_Evento.update(
            {
                dt_cadastro: dt_cadastro,
                cd_voluntario: cd_voluntario,
                cd_evento: cd_evento
            },
            {where: {cd_voluntario_evento: cd_voluntario_evento}}
        )
        const voluntarioEventoAtualizado = await Voluntario_Evento.findByPk(cd_voluntario_evento)

        res.send(voluntarioEventoAtualizado)
    } catch (e) {
        console.log(e)
    }
}

voluntario_evento.deleteVoluntarioEvento = async(req,res)=>{
    try {
        const {cd_voluntario_evento} = req.params
        await Voluntario_Evento.destroy({
            where: {cd_voluntario_evento: cd_voluntario_evento}
        })
        res.send({message: "sucesso ao deletar"})
    } catch (e) {
        console.log(e)
    }
}

export {voluntario_evento}