import express from "express"
import path from "path"
const router = express.Router()

router.get('/cancelamento', function(req,res){
    res.render('cancelamento')
})

export{router}