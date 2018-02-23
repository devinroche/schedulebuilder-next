import axios from 'axios'
import SubmitBtn from './SubmitBtn'

const CurrentSelected = ({ classes }) => (
    <div>
        <ul>
            {classes.map((element, i) => {
                return (<li key={i}>{element.seminar}, {element.title}</li>)
            })
            }
        </ul>

        <SubmitBtn courses={classes.map(cls => cls.seminar)} />
    </div>
)

export default CurrentSelected