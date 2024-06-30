import { estado } from "../controller/estado_controller.js";
import express from "express"

const router = express.Router()

router.get('/estado', estado.getEstado)
router.post('/estado', estado.createEstado)
router.put('/estado/:cd_estado', estado.updateEstado)
router.delete('/estado/:cd_estado', estado.deleteEstado)

export{router}