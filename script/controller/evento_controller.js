import e from "express"
import sequelize from "../config/connection.js"

let evento = {}

evento.create = async function(req, res){
    try {
        let evento = req.body
        let sql = "INSERT INTO evento (tp_projeto, ds_evento) VALUES (?,?);"
        let values = [evento.tp_projeto, evento.ds_evento]
        let result = await sequelize.query(sql, {
            replacements: values,
            type: sequelize.QueryTypes.INSERT
        });
        res.send({
            status:"Novo Evento Cadastrado com Sucesso",
            result: result
        })
    } catch (e) {
        console.log('Erro.................', e)
        res.status(500).send({error: 'Erro ao cadastrar evento'})
    }
}

export {evento}