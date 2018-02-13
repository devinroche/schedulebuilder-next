const CurrentSelected = ({ classes }) => (
    <div>
        <ul>
            {classes.map((element) => {
                return (<li>{element.seminar}, {element.title}</li>)
            })}
        </ul>
        <button onClick={() => {
            console.log(classes.map(cls => cls.seminar))
        }}>submit</button>
    </div>
)

export default CurrentSelected