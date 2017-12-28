import Navbar from './Navbar'
import Head from './Head'

const layoutStyle = {
    margin: 5,
    padding: 5,
}

const Layout = (props) => (
    <div>
        <Head/>
        <Navbar/>
        <div className=''>
            {props.children}
        </div>
    </div>
)

export default Layout