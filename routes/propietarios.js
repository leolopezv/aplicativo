var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Propietario = require('../models').propietario;


router.get('/findAll/json', function(req, res, next) {
    Propietario.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
    .then(propietarios => {
        res.json(propietarios);
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;