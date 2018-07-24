import Button from './Button/Button'
const CurrentSelected = ({ classes, callback, submitCourses }) => (
    <div>
        <ul>
            {classes.map((element, i) => {
                return (<li key={i}>{element.seminar}, {element.title}</li>)
            })
            }
        </ul>

        <Button cb={() => console.log('poo')} title={'Submit'} btnType={'good'}  />
        <Button cb={()=> console.log('fart')} title={'Clear'} btnType={'bad'} />
    </div>
)

export default CurrentSelected

/* afraid to delete
() => {
    axios.post('/api/schedules/generate/', {courses: courses}).then((response) => {
        callback(response.data)
    })
}

courses={classes.map(cls => cls.seminar)}
*/