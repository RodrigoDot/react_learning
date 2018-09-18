import React from 'react'
import ReactDom from 'react-dom'

import ClassField from './field'

ReactDom.render(
  <ClassField initialValue='Digite algo no input abaixo!'/>,
  document.getElementById('app')
)
