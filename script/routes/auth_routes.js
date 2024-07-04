import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// router.post('/login', (req, res) => {
//     const { user, pwd } = req.body;

//     if (user === 'camargo' && pwd === '123') {
//         const accessToken = jwt.sign({ username: user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
//         res.json({ token: accessToken, redirectUrl: '/home'});
//     } else {
//         res.status(401).send('Credenciais inválidas');
//     }
// });

router.post('/login', (req, res) => {
    const { user, pwd } = req.body;

    if (user === 'passatempo' && pwd === '123') {
        const accessToken = jwt.sign({ username: user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' });
        res.json({ token: accessToken, redirectUrl: '/home'});
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

router.post('/logout', function(req,res){
    res.json({auth:false, token:null})
})

export { router };
