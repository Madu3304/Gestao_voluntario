import express from "express"
import path from "path"
let router = express.Router()

router.get('/agendaProgramacao', function(req,res){
  res.render('agenda_programacao')
})
  
  
export {router}

