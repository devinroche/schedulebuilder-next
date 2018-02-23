import axios from 'axios'

const SubmitBtn = ({ courses }) => (
    <button style={styles} onClick={() => {
        axios.post('/api/schedules/generate/', {courses: courses}).then((response) => {
            console.log(response.data)
        })
    }}>submit</button>
)

export default SubmitBtn

const styles = {
    backgroundColor: 'green',
    color: 'white'
}