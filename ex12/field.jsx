import React, {
  Component
} from 'react'

class ClassField extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: props.initialValue
    }
    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(event) {
    this.setState({
      ...this.state,
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label>{ this.state.value }</label>
        <br/>
        <hr/>
        <input onChange={ this.changeValue } value={ this.state.value } />
      </div>
    )
  }
}

export default ClassField
