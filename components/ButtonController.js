import Button from './Button/Button'

const ButtonController = ({ cb }) => {
    return(
        <div>
            <Button onClick={() => console.log('foo')} btnType={'warn'} title={'Prev'}/>
            <Button onClick={() => console.log('foo')} btnType={'warn'} title={'Next'}/>
        </div>
    )
}

export default ButtonController