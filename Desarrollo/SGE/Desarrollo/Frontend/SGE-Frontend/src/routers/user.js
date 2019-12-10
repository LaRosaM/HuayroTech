const express = require('express');

const router = express.Router();


router.get('/user/signin', (req, res) => {
    //res.send('Ingresando a la APP');
    res.send('index');
});

router.get('/user/signup', (req, res) => {
    res.send('Form auth');
});

module.exports = router;