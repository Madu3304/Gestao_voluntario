import express from "express"

let router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('login');
});

export {router}