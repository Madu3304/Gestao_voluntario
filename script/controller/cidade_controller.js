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

export {cidade}