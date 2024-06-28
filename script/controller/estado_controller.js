import { where } from "sequelize";
import Estado from "../models/estado_models.js";

const estado = {}

estado.getEstado = async(req,res)=>{
    try {
        const estados  = await Estado.findAll()
        res.send(estados)
    } catch (e) {
        console.log('Erro ao tentar pegar os estados....', e)
    }
}

estado.createEstado = async(req,res)=>{
    try {
        const {ds_estado} = req.body
        const novoEstado = await Estado.create({
            ds_estado:ds_estado
        })
        res.send(novoEstado)
    } catch (e) {
        console.log('Erro ao tentar criar um novo estado......', e)
    }
}

estado.updateEstado = async(req, res)=>{
    try {
        const {cd_estado} = req.params
        const {ds_estado} = req.body

        await Estado.update(
            {
                ds_estado: ds_estado
            },
            {where: {cd_estado: cd_estado}}
        )
        const estadoAtualizado = await Estado.findByPk(cd_estado)
        
        res.send(estadoAtualizado)
    } catch (e) {
        console.log("Erro ao tentar atualizar um estado", e)
    }
}

estado.deleteEstado = async(req,res)=>{
    try {
        const {cd_estado} = req.params
        await Estado.destroy({
            where: {cd_estado:cd_estado}
        })
        res.send({message: "Estado deletado com sucesso"})
    } catch (e) {
        console.log("Erro ao tentar deletar um estado.....", e)
    }
}

export {estado}