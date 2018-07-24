var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const CourseSchema = new Schema({
    crn: {
        type: Number,
        required: [true, 'CRN Field is required.']
    },
    subject: {
        type: String,
        required: [true, 'Subject Field is required.']
    },
    course: {
        type: String,
        required: [true, 'Course Field is required.']
    },
    section: {
        type: String,
        required: [true, 'Section Field is required.']
    },
    credits: {
        type: String,
        required: [true, 'Credits Field is required.']
    },
    title: {
        type: String,
        required: [true, 'Title Field is required.']
    },
    campus: {
        type: String,
        required: [true, 'Campus Field is required.']
    },
    start_date: {
        type: String,
        required: [true, 'Start_Date Field is required.']
    },
    end_date: {
        type: String,
        required: [true, 'End_Date Field is required.']
    },
    times: {
        type: [String],
        required: [true, 'Times Field is required.']
    },
    location: {
        type: [String],
        required: [true, 'Room Field is required.']
    },
    instructor: {
        type: String,
        required: [true, 'Campus Field is required.']
    },
    week: {
        type: {String:[]},
        required: [true, 'Campus Field is required.']
    },
    seminar:{
        type: String
    }
});


module.exports = mongoose.model('catalog-spring-2018', CourseSchema);

