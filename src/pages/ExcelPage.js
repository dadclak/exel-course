import 'core-js/stable'
import 'regenerator-runtime/runtime'
import {Excel} from '../components/excel/Excel'
import {Header} from '../components/header/Header'
import {Toolbar} from '../components/toolbar/Toolbar'
import {Formula} from '../components/formula/Formula'
import {Table} from '../components/table/Table'
import {createStore} from '../core/createState'
import {rootReducer} from '../redux/rootReducer'
import {debounce, storage} from '../core/utils'
import {initialState} from '../redux/initialState'
import {Page} from '../core/page'

export class ExcelPage extends Page {
  getRoot() {
    const store = createStore(rootReducer, initialState)

    const stateListener = debounce(state => {
      storage('excel-state', state)
    }, 300)

    store.subscribe(stateListener)

    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    })

    return this.excel.getRoot()
  }

  afterRender() {
    console.log('after Render');
    this.excel.init()
  }

  destroy() {
    this.excel.destroy()
  }
}
