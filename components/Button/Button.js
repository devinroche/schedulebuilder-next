const Button = props => {
    const styling = getBtnStyle(props.btnType)
    
    return (
        <button onClick={props.cb} style={styling}>{props.title}</button>
    )
}

const goodBtn = {
    backgroundColor: '#2ed573',
    color: '#ffffff'
}

const badBtn = {
    backgroundColor: '#ff4757',
    color: '#ffffff'
}

const warningBtn = {
    backgroundColor: '#ffa502',
    color: '#ffffff'
}

export default Button

const getBtnStyle = btnType =>{
    let styling;
    if(btnType === 'good') styling = goodBtn;
    if(btnType === 'bad') styling = badBtn;
    if(btnType === 'warn') styling = warningBtn;

    return styling
}