import axios from 'axios'
import SubmitBtn from './SubmitBtn'

const CurrentSelected = ({ classes, callback, submitCourses }) => (
    <div>
        <ul>
            {classes.map((element, i) => {
                return (<li key={i}>{element.seminar}, {element.title}</li>)
            })
            }
        </ul>

        <SubmitBtn callback={submitCourses} courses={classes.map(cls => cls.seminar)} />
        <button onClick={callback}>Clear Selected</button>
    </div>
)

export default CurrentSelected