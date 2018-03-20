import Navbar from './Navbar'
import Head from './Head'

const Layout = (props) => (
    <div>
        <Head/>
        {/* <Navbar/> */}
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout