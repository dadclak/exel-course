/* eslint-disable require-jsdoc */
import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  // return pattern component
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  toHTML() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }
}
