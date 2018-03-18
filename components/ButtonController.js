const NextBtn = () => {
    return(<button onClick={()=> console.log('fart')}>next</button>)
}
const PrevBtn = () => {
    return(<button onClick={()=> console.log('fart')}>prev</button>)
}
const ButtonController = ({ callback }) => (
    <div>
        <PrevBtn/>
        <NextBtn/>
    </div>
)

export default ButtonController

const styles = {
    backgroundColor: 'green',
    color: 'white'
}