import Layout from '../components/Layout'
import Calendar from '../components/Calendar'
import Search from '../components/Search';

const containerStyle = {
    padding: 15,
    margin: 10,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    height: '90vh',
}

export default () => (
    <Layout>
        <div className='row'>
            <div className='eight columns cal' style={containerStyle}>
                <Calendar/>
            </div>
            <div className='four columns' style={containerStyle}>
                <div className='container'>
                    <Search theme="u-full-width"/>
                </div>
            </div>
        </div>
    </Layout>
)