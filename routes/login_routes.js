import express from "express"
import path from "path"
let router = express.Router()

router.get('/login', function(req,res){
    res.render('login')
})

export {router}