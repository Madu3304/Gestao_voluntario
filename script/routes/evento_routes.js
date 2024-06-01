import express from "express"

import { evento } from "../controller/evento_controller.js"

import Evento from "../models/evento_model.js"


let router = express.Router()

router.post('/teste', evento.create)





export {router}