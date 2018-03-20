import React from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar'
import styled from 'styled-components';

const CalContainer = styled.div`
    height: 75vh;
    padding-bottom: 20px;
`

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

let Cal = ({schedule, cal}) => {
    return(
        <CalContainer>
            <BigCalendar
                events={[]}
                toolbar={false}
                defaultView={'work_week'}
                views={['week', 'work_week']}
                step={30}
                min={new Date(2018, 10, 1, 8, 0)} 
                max={new Date(2018, 10, 1, 21, 30)} 
                defaultDate={new Date(2018, 10, 1)}
            />
        </CalContainer>
    )
}
  
export default Cal