import {storage} from '../core/utils'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentState: '',
}

export const initialState = storage('excel-state')
    ? storage('excel-state')
    : defaultState
