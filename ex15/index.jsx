import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import {
  combineReducers,
  createStore
} from 'redux'

import ClassField from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
  field: fieldReducer
})

ReactDom.render(
  <Provider store={ createStore(reducers) }>
    <ClassField />
  </Provider>,
  document.getElementById('app')
)
