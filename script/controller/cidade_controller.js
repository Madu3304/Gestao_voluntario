import { where } from "sequelize";
import Cidade from "../models/cidade_model.js";

const cidade = {}

cidade.getCidade = async(req,res)=>{
    try {
        const cidades = await Cidade.findAll()
        res.send(cidades)
    } catch (e) {
        console.log("Erro ao tentar consultar as cidades.......", e)
    }
}

cidade.createCidade = async(req,res)=>{
    try {
        const {ds_cidade, cd_estado} = req.body
        const novaCidade = Cidade.create({
            ds_cidade: ds_cidade,
            cd_estado: cd_estado
        })
        res.send(novaCidade)
    } catch (e) {
        console.log("Erro ao tentar inserir uma nova cidade.....", e)
    }
}

cidade.updateCidade = async(req,res)=>{
    try {
        const {cd_cidade} = req.params
        const {ds_cidade, cd_estado} = req.body
        
        await Cidade.update(
            {
                ds_cidade:ds_cidade,
                cd_estado:cd_estado
            },
            {where: {cd_cidade:cd_cidade}}
        )
        const cidadeAtualizada = await Cidade.findByPk(cd_cidade)
        res.send(cidadeAtualizada)
    } catch (e) {
        console.log("Erro ao tentar atualizar uma cidade.....", e)
    }
}

cidade.deleteCidade = async(req,res)=>{
    try {
        const {cd_cidade} = req.params
        await Cidade.destroy({
            where:{cd_cidade:cd_cidade}
        })
        res.send({message: 'Cidade deletada com sucesso'})
    } catch (e) {
        console.log("Erro ao tentar deletar cidade.....", e)
    }
}

export {cidade}