import {CHANGE_TEXT, CHANGE_STYLE, TABLE_RESIZE} from './types'

export const tableResize = (data) => {
  return {
    type: TABLE_RESIZE,
    data,
  }
}

export const changeText = (data) => {
  return {
    type: CHANGE_TEXT,
    data,
  }
}

export const changeStyles = (data) => {
  return {
    type: CHANGE_STYLE,
    data,
  }
}
