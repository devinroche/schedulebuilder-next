var express = require('express');
var router = express.Router();
var Catalog = require('../../models/course');


// Get basic course information
router.get('/', function (req, res, next) {
    Catalog.find({}, {_id:0, seminar:1, title:1}, function (err, courses) {
        if (err) next(err);

        res.json(courses);
    });
});

// Get all Course information for all Courses
router.get('/detail', function (req, res, next) {
    Catalog.find(function (err, courses) {
        if (err) next(err);
        res.json(courses);
    });
});

// Add Course
router.post('/', function (req, res, next) {
    Catalog.create(req.body, function(err, post){
        if (err) return next(err);
        res.json(post);
    });
});

// Update Course
router.put('/:id', function (req, res, next) {
    Catalog.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Delete Course
router.delete('/:id', function (req, res, next) {
    Catalog.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;