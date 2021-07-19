import {$} from '../core/dom'
import {Page} from '../core/page'

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
        <div class="db__header">
            <h1>Excel Dashboard</h1>
        </div>

        <div class="db__new">
            <div class="db__view">
                <a href="#" class="db__create">
                    New <br /> Table 
                </a>
            </div>
        </div>

        <div class="db__table db__view">

            <div class="db__list-header">
                <span>Name</span>
                <span>Date opened</span>
            </div>

            <ul class="db__list">

                <li class="db__record">

                    <a href="#">Table number 1</a>
                    <strong>10.05.2021</strong>

                </li>

                <li class="db__record">

                    <a href="#">Table number 2</a>
                    <strong>10.05.2021</strong>

                </li>

                <li class="db__record">

                    <a href="#">Table number 3</a>
                    <strong>10.05.2021</strong>

                </li>

            </ul>

        </div>
    `)
  }
}
