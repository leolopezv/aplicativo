var express = require('express');
var router = express.Router();
const {Sequelize, Op} = require('sequelize');
const Edificio = require('../models').edificio;
const Propietario = require('../models').propietario;

router.get('/findAll/json', function(req, res, next) {  
    Edificio.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Propietario,
            as: 'propietario', 
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }]
    })  
    .then(edificios => {  
        res.json(edificios);  
    })  
    .catch(error => res.status(400).send(error)) 
});

router.get('/findAll/view', function(req, res, next) {  
    Edificio.findAll({  
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Propietario,
            as: 'propietario', 
            attributes: { exclude: ["createdAt", "updatedAt"] }
        }]
    })  
    .then(edificios => {  
        res.render('edificios', { title:'edificios', arrEdificios: edificios });  
    })  
    .catch(error => res.status(400).send(error)) 
});

module.exports = router;