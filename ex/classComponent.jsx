import React, {
  Component
} from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.initialValue
    }
  }

  sum(delta) {
    this.setState({
      ...this.state,
      value: this.state.value + delta
    })
  }

  render() {
    return (
      <div>
        <h1>
          <small>{ this.props.label } </small>
          <span> { this.state.value }</span>
        </h1>
        <button onClick={() => this.sum(-1)}>Drecrementar</button>
        <button onClick={() => this.sum(1)}>Incrementar</button>
      </div>
    )
  }
}
