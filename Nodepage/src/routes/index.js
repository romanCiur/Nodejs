//definiendo rutas de navegacion

const express = require("express");
const router = express.Router(); //modulo para tener multiples rutas

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: 'Node website'});
});
router.get('/flexbox', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('flexbox.html', { title: 'Hecho con flexbox'});
});
router.get('/grid', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('grid.html', { title: 'Hecho con grid'});
});
//exportamos el modulo
module.exports = router;


// ordenar el codigo
// ctrl + k 
// ctrl + f