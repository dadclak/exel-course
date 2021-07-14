import {TABLE_RESIZE} from './types'

export const tableResize = (data) => {
  return {
    type: TABLE_RESIZE,
    data,
  }
}
