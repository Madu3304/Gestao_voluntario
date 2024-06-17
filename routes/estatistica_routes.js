import express from "express"
import path from "path"

const router = express.Router()

router.get('/estatistica', function(req,res){
    res.render('estatistica')
})

export {router}