import Layout from '../components/Layout'
import Calendar from '../components/Calendar'
import Search from '../components/Search';

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
            schedules: []
        }
    }

    setSchedules = (scheduleArr) => {
        console.log(scheduleArr, 'hi')
        this.setState({
            schedules: scheduleArr
        })
    }

    render(){
        return(
            <Layout>
                <div className='row'>
                    <div className='eight columns cal' style={containerStyle}>
                        <Calendar/>
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