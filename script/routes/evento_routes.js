import express from "express"
import { evento } from "../controller/evento_controller.js"
let router = express.Router()

router.get('/evento', evento.getEventos)
router.post('/evento', evento.createEvento)
router.put('/evento/:cd_evento',evento.updateEvento)
router.delete('/evento/:cd_evento', evento.deleteEvento)

// router.get('/evento', (req,res) => {
//     res.render('evento')
// }) 

export {router}