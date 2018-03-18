import Layout from '../components/Layout'
import Calendar from '../components/Calendar'
import Search from '../components/Search';
import ButtonController from '../components/ButtonController'
import moment from 'moment';

const containerStyle = {
    padding: 15,
    margin: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    height: '90vh',
}

export default class extends React.Component {
    constructor () {
        super()
        this.state = {
            schedules: [],
            counter: 0,
            current: null
        }
    }

    setSchedules = (scheduleArr) => {
        console.log(scheduleArr)
        this.setState({
            schedules: scheduleArr,
            current: scheduleArr[0],
        })
        
    }

    render(){
        return(
            <Layout>
                <div className='row'>
                    <div className='eight columns cal' style={containerStyle}>
                        <Calendar schedule={this.state.current} cal={this.state.tmpCal} />
                        <ButtonController />
                    </div>
                    <div className='four columns' style={containerStyle}>
                        <div className='container'>
                            <Search callback={this.setSchedules.bind(this)} theme="u-full-width"/>
                    </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
let tmp =[]
let formCalendar = schedule => {
    schedule.map((course) => {
        Object.keys(course.week).map((day, i) => (course.week[day] == null) && delete course.week[day]);
        Object.keys(course.week).map((day, i) => {
            tmp.push({
                uid: formCalendar.length,
                title: course.seminar,
                start: moment([2018, 10, dayMap[day], course.week[day][0].split(':')[0], course.week[day][0].split(':')[1]]),
                end: moment([2018, 10, dayMap[day], course.week[day][1].split(':')[0], course.week[day][1].split(':')[1]])
            })
        })
    })
    this.setSchedules({
        tmpCal: tmp
    })
}
let dayMap = {
    M: 1,
    T: 2,
    W: 3,
    R: 4, 
    F: 5
}