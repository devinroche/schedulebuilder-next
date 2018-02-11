var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Catalog = require('../models/course');

router.get('/hello_world', function (req, res, next) {
    res.json({"test":"Hello World"})
});

router.get('/hello/:name', function (req, res, next) {
    res.json({"test":`Hello ${req.params.name}`})
});

router.get('/', function (req, res, next) {
    Catalog.find(function (err, courses) {
        if (err) next(err);
        res.json(courses);
    });
});

module.exports = router;