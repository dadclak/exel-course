import {APPLY_STYLE, CHANGE_TEXT, CHANGE_STYLE, TABLE_RESIZE} from './types';

export function rootReducer(state, action) {
  let field;
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState'
      return {...state, [field]: value(state, field, action)}
    case CHANGE_TEXT:
      field = 'dataState'
      return {
        ...state,
        currentText: action.data.value,
        [field]: value(state, field, action),
      }
    case CHANGE_STYLE:
      return {...state, currentStyles: action.data}
    case APPLY_STYLE:
      return
    default: return state
  }
}

function value(state, field, action) {
  const val = state[field] || {}
  val[action.data.id] = action.data.value
  return val
}
