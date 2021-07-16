import {ExcelComponent} from '../../core/ExcelComponent'
import {createToolbar} from './toolbar.template'
import {$} from '../../core/dom'

export class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar'

    constructor($root, options) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        ...options,
      })
    }

    toHTML() {
      return createToolbar()
    }

    onClick(event) {
      const $target = $(event.target)
      if ($target.data.type === 'button') {
        console.log($target.data.value);
      }
    }
}
