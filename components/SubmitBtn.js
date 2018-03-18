import axios from 'axios'

const SubmitBtn = ({ courses, callback }) => (
    <button style={styles} onClick={() => {
        axios.post('/api/schedules/generate/', {courses: courses}).then((response) => {
            console.log(response.data)
            callback(response.data)
        })
    }}>submit</button>
)

export default SubmitBtn

const styles = {
    backgroundColor: 'green',
    color: 'white'
}