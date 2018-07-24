import Head from './Head'

const Layout = (props) => (
    <div>
        <Head/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout