import Layout from '../components/Layout'
import Calendar from '../components/Calendar'

export default () => (
    <Layout>
        <div className='row'>
            <div className='eight columns cal'>
                <Calendar/>
            </div>
            <div className='four columns'>
                <p>Hello Next.js</p>
            </div>
        </div>
    </Layout>
)