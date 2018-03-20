import Layout from '../components/Layout'
import Cal from '../components/tmpCal'
import Search from '../components/Search';
import ButtonController from '../components/ButtonController'
import moment from 'moment';
import styled from 'styled-components';

export default class extends React.Component {
    constructor () {
        super()
        this.state = {
            schedules: [],
            counter: 0,
            current: null
        }
    }
    changeCal = (dir) => {
        if(dir === 1) this.state.counter++
        else this.state.counter--
    }

    formCalendar = (schedule) => {
        let tmp = []
        schedule.map((course) => {
            Object.keys(course.week).map((day, i) => (course.week[day] == null) && delete course.week[day]);
            Object.keys(course.week).map((day, i) => {
                tmp.push({
                    uid: tmp.length,
                    value: course.seminar,
                    start: moment([2018, 9, dayMap[day], course.week[day][0].split(':')[0], course.week[day][0].split(':')[1]]),
                    end: moment([2018, 9, dayMap[day], course.week[day][1].split(':')[0], course.week[day][1].split(':')[1]])
                })
            })
        })
        this.setState({
            tmp: tmp
        })
    }

    setSchedules = (scheduleArr) => {
        this.setState({
            schedules: scheduleArr,
            current: scheduleArr[0],
        })
        this.formCalendar(scheduleArr[0])
    }

    render(){
        const ContBox = styled.div`
            padding: 15px;
            margin: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            height: 90vh;
        `

        return(
            <Layout>
                <div className='row'>
                    <ContBox className='eight columns'>
                        <Cal schedule={this.state.current} cal={this.state.tmp} />
                        <ButtonController cb={this.changeCal.bind(this)} />
                    </ContBox>
                    <ContBox className='four columns'>
                        <Search callback={this.setSchedules.bind(this)}/>
                    </ContBox>
                </div>
            </Layout>
        )
    }
}

let dayMap = {
    M: 1,
    T: 2,
    W: 3,
    R: 4, 
    F: 5
}