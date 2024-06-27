import express from "express"
import path from "path"
const router = express.Router()

router.get('/home', function(req,res){
    res.render('home')
})

export {router}

