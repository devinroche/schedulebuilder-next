const NextBtn = () => {
    return(<button>next</button>)
}
const PrevBtn = () => {
    return(<button>prev</button>)
}
const ButtonController = ({ cb }) => {
    console.log(cb)

    return(
    <div>
        <button onClick={() => cb(0)}>prev</button>
        <button onClick={()=> cb(1)}>next</button>
    </div>
    )
}

export default ButtonController

const styles = {
    backgroundColor: 'green',
    color: 'white'
}