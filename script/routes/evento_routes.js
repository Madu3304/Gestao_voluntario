import express from "express"
import path from "path"
let router = express.Router()

router.get('/evento', (req,res) => {
    res.render('evento')
}) 

export {router}