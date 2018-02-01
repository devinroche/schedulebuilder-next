import Autocomplete from 'react-autocomplete'
import axios from 'axios'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            data: []
        };
    }

    removeDuplicates = (myArr) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj['seminar']).indexOf(obj['seminar']) === pos;
        });
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/classes').then(
            (response) => {
                const filteredArr = response.data.filter((obj, pos, arr) => {
                        return response.data.map(mapObj => mapObj['seminar']).indexOf(obj['seminar']) === pos;
                });
                this.setState({
                    data: filteredArr
                })
            }
        )
    }

    render() {
        return (
            <Autocomplete
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                value={this.state.value}
                items={this.state.data}
                getItemValue={(item) => item.title}
                shouldItemRender={(cls, val) => {
                    return( 
                        cls.title.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
                        cls.seminar.toLowerCase().indexOf(val.toLowerCase()) !== -1
                    )
                }}
                onSelect={(value, item) => {
                    console.log(value, item)
                    this.setState({ value, unitedStates: [item] })
                }}
                onChange={(event, value) => {
                    this.setState({ value })
                }}
                renderMenu={children => (
                    <div className="menu">
                        {children}
                    </div>
                )}
                renderItem={(item, isHighlighted) => (
                    <div key={item.seminar}>{item.title}</div>
                )}
            />
        );
    }
}

export default Search