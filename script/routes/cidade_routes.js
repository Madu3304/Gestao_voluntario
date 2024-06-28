import express from "express"
import { cidade } from "../controller/cidade_controller.js";

const router = express.Router()

router.get('/cidade', cidade.getCidade)

export {router}