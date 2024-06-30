import { voluntario_evento } from "../controller/voluntario_evento_controller.js";
import express from "express"

const router = express.Router()

router.get('/voluntario_evento', voluntario_evento.getVoluntarioEvento)
router.post('/voluntario_evento', voluntario_evento.createVoluntarioEvento)
router.put('/voluntario_evento/:cd_voluntario_evento', voluntario_evento.updateVoluntarioEvento)
router.delete('/voluntario_evento/:cd_voluntario_evento', voluntario_evento.deleteVoluntarioEvento)

export {router}