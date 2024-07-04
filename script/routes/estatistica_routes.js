import express from "express";
import { evento_estatistica, voluntario_estatistica } from "../controller/estatistica_controller.js";

let router = express.Router();

router.get('/estatistica/eventos', evento_estatistica.getCountEventos);
router.get('/estatistica/voluntarios', voluntario_estatistica.getCountVoluntarios);

export { router };
