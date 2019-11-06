const router = require('express').Router(); //Solo requiero las rutas porque ya tengo el servidor

router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
