import express from "express"
import path from "path"
let router = express.Router()

router.get('/agenda', function(req,res){
    res.render('agenda')
})

export {router}