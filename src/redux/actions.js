import {
  CHANGE_TEXT,
  CHANGE_STYLE,
  TABLE_RESIZE,
  APPLY_STYLE,
  CHANGE_TITLE,
} from './types'

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

export const applyStyle = (data) => {
  return {
    type: APPLY_STYLE,
    data,
  }
}

export const changeTitle = (data) => {
  return {
    type: CHANGE_TITLE,
    data,
  }
}
