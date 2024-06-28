import express from "express"
import { cidade } from "../controller/cidade_controller.js";

const router = express.Router()

router.get('/cidade', cidade.getCidade)
router.post('/cidade', cidade.createCidade)
router.put('/cidade/:cd_cidade', cidade.updateCidade)
router.delete('/cidade/:cd_cidade', cidade.deleteCidade)

export {router}