export function changeValue(e) {
  console.log('ChangeValue CALLED on fieldActions')
  return {
    type: 'VALUE_CHANGED',
    payload: e.target.value
  }
}
