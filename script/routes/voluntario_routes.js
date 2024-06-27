import express from "express"
import path from "path"
const router = express.Router()

router.get('/voluntario', function(req,res){
    res.render('voluntario')
})

export {router}