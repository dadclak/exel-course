import {ExcelComponent} from '../../core/ExcelComponent'
import {$} from '@core/dom'
import {createTable} from './table.template'
import {resizeHandler} from './table.resize'
import {isCell, shouldResize, matrix, nextSelector} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
      super($root, {
        listeners: ['mousedown', 'keydown'],
      })
    }

    toHTML() {
      return createTable()
    }

    prepare() {
      this.selection = new TableSelection()
    }

    init() {
      super.init()

      const $cell = this.$root.find('[data-id="0:0"]')
      this.selection.select($cell)
    }

    onMousedown(event) {
      if (shouldResize(event)) {
        resizeHandler(this.$root, event)
      } else if (isCell(event)) {
        const $target = $(event.target)
        if (event.shiftKey) {
          const $cells = matrix($target, this.selection.current)
              .map(id => this.$root.find(`[data-id="${id}"]`))
          this.selection.selectGroup($cells)
        } else {
          this.selection.select($target)
        }
      }
    }

    onKeydown(event) {
      const keys = [
        'Enter',
        'Tab',
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
      ]

      const {key} = event
      if (keys.includes(key) && !event.shiftKey) {
        event.preventDefault()
        const id = this.selection.current.id(true)
        const $next = this.$root.find(nextSelector(key, id))
        this.selection.select($next)
      }
    }
}
