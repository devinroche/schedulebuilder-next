var express = require('express');
var router = express.Router();
var Catalog = require('../../models/course');


// Get basic course information
router.post('/generate', function (req, res, next) {
    let courses = req.body.courses;
    Catalog.find({seminar:{$in:courses}}, {_id:0, crn:1, week:1, seminar:1}, function (err, seminars) {
        if (err) next(err);

        let results = {};
        // initialize results dictionary
        courses.map(function (course) {results[course] = []});
        // sort sections into dictionary by Class data field
        seminars.map(function (section) {results[section.seminar].push(section);});
        let configured = Object.keys(results).map(function (key) {return results[key]});

        let schedules = viable_schedules(configured);

        res.json(schedules);
    });
});


/**
 * Generates all Viable schedules given selected courses
 *
 * @param courses Array of Arrays of Courses categorized seminar field
 * @return Returns List of Schedules that are comprised of Lists of Courses
 */
function viable_schedules(courses) {
    return viable(courses, []);

    /**
     * Viable Schedule Helper Function
     *
     * @param courses Array of Arrays of Courses categorized seminar field
     * @param schedules List of Schedules that are comprised of Lists of courses
     * @returns Returns List of Schedules that are comprised of Lists of Courses
     */
    function viable(courses, schedules) {

        if (courses.length === 0) {
            // return schedules if there are no additional
            // courses to add
            return schedules;
        } else if(schedules.length === 0) {
            // if there are no schedules, create base schedules
            // with one set of courses and call helper function
            let head = courses.pop();
            return viable(courses, head.map(function (course) {return [course]}));
        } else{
            var temp = [];
            let head = courses.pop();

            // iterate through courses and schedules
            for (var i = 0; i < head.length; i++){
                for(var j = 0; j <schedules.length; j++){
                    // add course to schedule if it doesn't conflict
                    // with any of the courses already in the schedule
                    if(!conflicts(head[i], schedules[j])){
                        var schedule = JSON.parse(JSON.stringify(schedules[j])); // deep copy
                        schedule.push(head[i]); // add course to schedule
                        temp.push(schedule); // add schedule to temp schedules
                    }
                }
            }
            return viable(courses, temp); // recursive step
        }
    }


    /***
     * Checks if a course conflicts with a given schedule
     *
     * @param course
     * @param schedule
     * @return {boolean} Returns true if the course conflicts with any of the courses
     *          already in the schedule; otherwise, false
     */
    function conflicts(course, schedule) {

        // iterates through each course in the schedule
        for(var i = 0; i < schedule.length; i++){
            if(week_conflicts(course.week, schedule[i].week))
                return true;
        }
        return false;

        /**
         * conflicts helper function.
         * Checks if any of the times in week1 conflict with the times in week2
         *
         * @param week1 Week Object that stores arrays of time objects
         * @param week2 Week Object that stores arrays of time objects
         * @return {boolean} Returns true if any event in week1 conflict with any event in week2
         */
        function week_conflicts(week1, week2) {

            // iterates through each day of the week
            for(var key in week1){
                if(week1.hasOwnProperty(key) && week2.hasOwnProperty(key) && time_conflicts(week1[key], week2[key]))
                    return true;
            }
            return false;
        }

        /**
         * week_conflicts helper function.
         * Checks if any two events conflict with each other
         * @param time1 Array of start and end times for event
         * @param time2 Array of start and end times for event
         * @return {boolean} Returns true if time1 conflicts with time2; otherwise false
         */
        function time_conflicts(time1, time2){

            if(time1 == null || time2 == null){return false;}  // check if time1 or time2 are null
            // convert time from strings to Date Objects
            time1 = time1.map(function (time) { return new Date("1/18/2017 " + time) });
            time2 = time2.map(function (time) { return new Date("1/18/2017 " + time) });

            return !(time1[1] <= time2[0] || time2[1] <= time1[0]);
        }
    }
}


module.exports = router;