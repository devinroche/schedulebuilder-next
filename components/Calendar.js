import React from 'react';
import events from '../events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);
let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const Calendar = props => (
    <BigCalendar
        events={events}
        defaultDate={new Date()}
        defaultView='work_week'
        views={allViews}
        toolbar={false}
        min={new Date(2018, 1, 1, 8, 0)}
        max={new Date(2018, 1, 1, 21, 30)}
        selectable={'ignoreEvents'}
        formats={formats}
    />
)

let formats = {
    dayFormat: (date, culture, localizer) => localizer.format(date, 'dddd', culture),
  }
export default Calendar
