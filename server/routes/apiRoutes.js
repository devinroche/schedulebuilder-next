var express = require('express');
var router = express.Router();
var Catalog = require('../models/classes');
var product = require('cartesian-product');


// GETS all Subject, Course Number, and Title combinations from Catalog
router.get('/classes', function (req, res) {
    Catalog.aggregate({ "$group": { _id: { subject: "$subject", course: "$course", title: "$title", credits: "$credits", seminar: "$seminar" } } }
    ).then(function (classes) {
        var results = classes.map(function (result) { return result._id });
        results.sort(function (a, b) {
            return (a.subject > b.subject) ? 1 : ((b.subject > a.subject) ? -1
                : (a.course > b.course) ? 1 : (a.course < b.course) ? -1 : 0);
        });
        res.send(results)
    })
});

router.post('/sections', function (req, res) {
    course = req.body.class;

    Catalog.find({ seminar: course }).then(function (sections) {
        res.send(sections);
    });
});

router.post('/saved_schedule', function (req, res) {
    crns = req.body.crns;
    Catalog.find({ CRN: crns }).then(function (sections) {
        res.send(viable_schedules([sections]));
    })
});

router.post('/schedules', function (req, res) {
    classes = req.body.classes;
    blocks = req.body.blocks;
    Catalog.find({ seminar: { $in: classes } }).then(function (sections) {

        var results = {};
        // initialize results dictionary
        classes.map(function (elem) { results[elem] = [] });
        // sort sections into dictionary by Class data field
        sections.map(function (section) { results[section.seminar].push(section); });
        configured = Object.keys(results).map(function (key) { return results[key] });

        all_schedules = product(configured).map(function (schedule) { return schedule });
        // all_schedules = all_schedules.map(function (schedule) {return schedule}); //.concat(blocks)});

        res.send(viable_schedules(all_schedules));
    })
});

// returns true if any times in the day array conflict; otherwise, false
function conflicts(day) {

    if (day.length < 2)
        return false;

    var head = day[0]; var tail = day.slice(1);

    for (var i = 0; i < tail.length; i++) {
        if (time_conflicts(head, tail[i]))
            return true
    }
    return conflicts(tail); // recursive step

    // returns true if time1 conflicts with time2; otherwise false
    function time_conflicts(time1, time2) {

        if (time1 == null || time2 == null) { return false; }  // check if time1 or time2 are null
        // convert time from strings to Date Objects
        time1 = time1.map(function (time) { return new Date("1/18/2017 " + time) });
        time2 = time2.map(function (time) { return new Date("1/18/2017 " + time) });

        return !(time1[1] <= time2[0] || time2[1] <= time1[0]);
    }
}


// returns all of the viable schedules from all_schedules
function viable_schedules(all_schedules) {

    return all_schedules.filter(function (schedule) {
        return viable(schedule)
    });

    // returns true if a schedule is viable; otherwise, false
    function viable(schedule) {

        if (schedule.length < 2) {
            return true
        } else {

            // aggregates all of the week attributes in a schedule
            // into one week dictionary
            var weeks = schedule.map(function (schedule) { return schedule.week });
            var week = { "M": [], "T": [], "W": [], "R": [], "F": [] };
            var keys = Object.keys(weeks[0]);
            keys.forEach(function (day) {
                weeks.forEach(function (time) {
                    if (time[day] != null)
                        week[day].push(time[day]);
                });
            });

            // checks each day of the week to see if there are
            // any conflicting classes
            for (i = 0; i < keys.length; i++)
                if (conflicts(week[keys[i]]))
                    return false;
            return true;
        }
    }
}

module.exports = router;