import React, {
  Component
} from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>HELLO COMPONENT</h1>
        <span>{ this.props.value }</span>
      </div>
    )
  }
}
