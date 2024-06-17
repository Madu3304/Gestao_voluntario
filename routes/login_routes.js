import express from "express"
import path from "path"

let router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('login');
});

export {router}