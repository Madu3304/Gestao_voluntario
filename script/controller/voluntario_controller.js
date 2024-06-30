import { where } from "sequelize";
import Voluntario from "../models/voluntario.model.js";

const voluntario = {}

voluntario.getVoluntario = async(req,res)=>{
    const voluntarios = await Voluntario.findAll()
    res.send(voluntarios)
}

voluntario.createVoluntario = async(req,res)=>{
    try {
        const {nomeVoluntario, emailVoluntario, endereco, ie_cancelado, dt_cancelado} = req.body
        const novoVoluntario = await Voluntario.create({
            nm_voluntario: nomeVoluntario,
            email: emailVoluntario,
            endereco: endereco,
            ie_cancelado: ie_cancelado,
            dt_cancelado: dt_cancelado
        })
        res.send(novoVoluntario)
    } catch (e) {
        console.log("Erro ao tentar adicionar um novo voluntário.......", e)
    }
}

voluntario.updateVoluntario = async(req,res)=>{
    try {
        const {cd_voluntario} = req.params
        const {nm_voluntario, email, endereco, ie_cancelado, dt_cancelado} = req.body 
        await Voluntario.update(
            {
                nm_voluntario: nm_voluntario,
                email: email,
                endereco: endereco,
                ie_cancelado: ie_cancelado,
                dt_cancelado: dt_cancelado
            },
            {where: {cd_voluntario: cd_voluntario}}
        )
        const voluntarioAtualizado = await Voluntario.findByPk(cd_voluntario)

        res.send(voluntarioAtualizado)
    } catch (e) {
        console.log("Erro ao tentar atualizar voluntario....", e)
    }
}

voluntario.deleteVoluntario = async(req,res)=>{
    try {
        const {cd_voluntario} = req.params
        await Voluntario.destroy({
            where: {cd_voluntario: cd_voluntario}
        })

        res.send({message: "Voluntario deletado com sucesso"})
    } catch (e) {
        console.log("Erro ao tentar deletar um voluntario......", e)
    }
}

export {voluntario}