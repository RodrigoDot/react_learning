import React from 'react'
import ReactDom from 'react-dom'

import Primeiro, {
  Segundo
} from './component'

ReactDom.render(
  <div>
    <Primeiro title='Passando PROPS' name='Primeiro Componente!' />
    <Segundo title='Passando PROPS' name='Segundo Componente!' />
  </div>,
  document.getElementById('app')
)
