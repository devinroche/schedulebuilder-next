import Layout from '../components/Layout'
import Cal from '../components/Calendar'
import Search from '../components/Search';
import ButtonController from '../components/ButtonController'
import styled from 'styled-components';
import {connect} from 'react-redux'
import Examples from '../components/Examples'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        console.log(reduxStore)
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))
    
        return {}
      }
    // constructor () {
    //     super()
    //     this.state = {
    //         schedules: [],
    //         counter: 0,
    //         current: null
    //     }
    // }

    // formCalendar = (schedule) => {
    //     let tmp = []
    //     schedule.map((course) => {
    //         Object.keys(course.week).map((day, i) => (course.week[day] == null) && delete course.week[day]);
    //         Object.keys(course.week).map((day, i) => {
    //             tmp.push({
    //                 uid: tmp.length,
    //                 value: course.seminar,
    //                 start: moment([2018, 9, dayMap[day], course.week[day][0].split(':')[0], course.week[day][0].split(':')[1]]),
    //                 end: moment([2018, 9, dayMap[day], course.week[day][1].split(':')[0], course.week[day][1].split(':')[1]])
    //             })
    //         })
    //     })
    //     this.setState({
    //         tmp: tmp
    //     })
    // }

    // setSchedules = (scheduleArr) => {
    //     this.setState({
    //         schedules: scheduleArr,
    //         current: scheduleArr[0],
    //     })
    //     this.formCalendar(scheduleArr[0])
    // }

    render(){
        console.log(this.props)
        const ContBox = styled.div`
            padding: 15px;
            margin: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            height: 90vh;
        `

        return(
            <Layout>
                <Examples />
                <div className='row'>
                    <ContBox className='eight columns'>
                        <Cal />
                        <ButtonController />
                    </ContBox>
                    <ContBox className='four columns'>
                        <Search />
                    </ContBox>
                </div>
            </Layout>
        )
    }
}

export default connect()(Index)



/*  not sure if i can delete this yet.
    <Cal schedule={this.props.current} cal={this.props.tmp} />
    <ButtonController cb={this.changeCal.bind(this)} />
    <Search callback={this.setSchedules.bind(this)}/>
*/