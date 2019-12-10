const router = require('express').Router(); //Solo requiero las rutas porque ya tengo el servidor

router.get('/', (req, res) => {
    if (req.isAuthenticated() || req.user !== undefined) {
        res.render('index');
    }
    res.render('login');
});

module.exports = router;
