import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import {
  combineReducers,
  createStore
} from 'redux'

import ClassField from './field'

const reducers = combineReducers({
  field: () => ({ value: 'OPA' })
})

ReactDom.render(
  <Provider store={ createStore(reducers) }>
    <ClassField initialValue='Digite algo no input abaixo!'/>
  </Provider>,
  document.getElementById('app')
)
