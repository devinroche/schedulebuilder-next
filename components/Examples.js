import {connect} from 'react-redux'
import Counter from './Counter'

function Examples ({ lastUpdate, light }) {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default connect()(Examples)
