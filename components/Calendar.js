import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

let tmp = []

const Calendar = props => {
    console.log(props)
    let dateArr = props.schedule === null ? '' : props.schedule.map((course) => {
        Object.keys(course.week).map((day, i) => (course.week[day] == null) && delete course.week[day]);
        Object.keys(course.week).map((day, i) => {
            tmp.push({
                uid: tmp.length,
                title: course.seminar,
                start: moment([2018, 10, dayMap[day], course.week[day][0].split(':')[0], course.week[day][0].split(':')[1]]),
                end: moment([2018, 10, dayMap[day], course.week[day][1].split(':')[0], course.week[day][1].split(':')[1]])
            })
        })
    })
    console.log(tmp)

    return (
        <WeekCalendar
            firstDay = {moment('2018-10-01')}
            scaleUnit= {30}
            cellHeight={30}
            dayFormat = 'dddd'
            scaleFormat='h:mm A'
            startTime = {moment({h: 0, m: 0})}
            endTime = {moment({h: 20, m: 0})}
            selectedIntervals = {tmp}
            numberOfDays= {5}
        />
)}

let dayMap = {
    M: 1,
    T: 2,
    W: 3,
    R: 4, 
    F: 5
}

export default Calendar