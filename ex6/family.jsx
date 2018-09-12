import React from 'react'

import Member from './member'

export default props => (
  <div>
    <Member name='Rodrigo' lastName={props.lastName} />
    <Member name='Rumao' lastName={props.lastName} />
    <Member name='Duda' lastName={props.lastName} />
  </div>
)
