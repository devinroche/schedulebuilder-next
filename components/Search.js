import Autocomplete from 'react-autocomplete'
import CurrentSelected from './CurrentSelected'
import axios from 'axios'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: [],
            data: [],
            courses: []
        };
    }

    removeDuplicates = (myArr) => {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj['seminar']).indexOf(obj['seminar']) === pos;
        });
    }

    componentDidMount() {
        axios.get('/api/courses/').then(
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
            <div>
                <Autocomplete
                    inputProps={{ id: 'states-autocomplete' }}
                    wrapperStyle={{ position: 'relative', display: 'inline-block', width: '100%' }}
                    value={this.state.value}
                    items={this.state.data}
                    getItemValue={(item) => item.title}
                    shouldItemRender={(cls, val) => {
                        return (
                            cls.title.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
                            cls.seminar.toLowerCase().indexOf(val.toLowerCase()) !== -1
                        )
                    }}
                    onSelect={(value, item) => {
                        console.log(item.seminar)
                        this.setState({
                            courses: [item, ...this.state.courses]
                        })
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
                        <div className='searchElem' key={item.seminar}>{item.title}</div>
                    )}
                />
                <CurrentSelected classes={this.state.courses} />
            </div>
        );
    }
}

export default Search