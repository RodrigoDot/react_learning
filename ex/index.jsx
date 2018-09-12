import React from 'react'
import ReactDom from 'react-dom'

import Family from './family'
import Member from './member'

ReactDom.render(
  <Family lastName='Barbosa'>
    <Member name='Rodrigo' />
  </Family>,
  document.getElementById('app')
)
