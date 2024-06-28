import express from "express"
import { evento } from "../controller/evento_controller.js"
let router = express.Router()

router.get('/evento', evento.getEventos)

// router.get('/evento', (req,res) => {
//     res.render('evento')
// }) 

export {router}