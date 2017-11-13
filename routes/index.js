const express = require('express');
const Pi = require('../controllers/pi');
const Country = require('../controllers/country');
const slotMachine = require('../controllers/slotMachine');
const dataBase = require('../models/yobetit');

var router = express.Router();

// View EJS
router.get('/', function (req, res) {
    res.render('nodeQ1')
});

router.get('/nodeQ2', function (req, res) {
    res.render('nodeQ2')
});

router.get('/nodeQ3', function (req, res) {
    res.render('nodeQ3')
});

router.get('/nodeQ4', function (req, res) {
    res.render('nodeQ4')
});

router.get('/sqlQ1', function (req, res) {
    res.render('sqlQ1')
});

router.get('/sqlQ2', function (req, res) {
    res.render('sqlQ2')
});

router.get('/test', function (req, res) {
    res.render('test')
});

router.get('/pi', function (req, res) {
    res.render('nodeQ1')
});


// API TEST
router.post('/api/pi', Pi.postPi)

router.post('/api/country', Country.getOneCountry)
router.post('/api/countries', Country.getManyCountry)

router.post('/api/slotMachine', slotMachine.index)

router.post('/api/dataBase', dataBase.selectPLAYER)

//IF URL NOT FOUND
router.get('*', function (req, res) {
    res.status(200).json({message: 'Error : This URL not found', Link: req.url})
});

module.exports = router;