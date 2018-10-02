import React, {
  Component
} from 'react'

import { connect } from 'react-redux'

class ClassField extends Component {
  render() {
    return (
      <div>
        <label>{ this.props.value }</label>
        <br/>
        <hr/>
        <input onChange={ this.changeValue } value={ this.props.value } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.field.value
  }
}

export default connect(mapStateToProps)(ClassField)
