import { voluntario } from "../controller/voluntario_controller.js";
import express from "express"

const router = express.Router()

router.get('/voluntario', voluntario.getVoluntario)
router.post('/voluntario', voluntario.createVoluntario)
router.put('/voluntario/:cd_voluntario', voluntario.updateVoluntario)
router.delete('/voluntario/:cd_voluntario', voluntario.deleteVoluntario)

export {router}