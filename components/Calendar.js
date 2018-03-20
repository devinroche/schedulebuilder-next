import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import WeekCalendar from 'react-week-calendar';

let tmp = []

const Calendar = props => {
    console.log(props.cal)

    return (
        <WeekCalendar
            firstDay={moment('2018-10-01')}
            scaleUnit={30}
            cellHeight={30}
            dayFormat='ddd'
            scaleFormat='h:mm A'
            startTime={moment({ h: 8, m: 0 })}
            endTime={moment({ h: 22, m: 0 })}
            selectedIntervals={props.cal}
            numberOfDays={5}
        />
    )
}

export default Calendar