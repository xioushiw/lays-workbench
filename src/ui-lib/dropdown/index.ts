import { App as Application }  from 'vue'
import Dropdown from './dropdown.vue'
import DropdownItem from './dropdown-item.vue'
import DropdownItemPlain from './dropdown-item-plain.vue'

export default {
  install(app: Application) {
    app.component('dropdown', Dropdown)
    app.component('dropdown-item', DropdownItem)
    app.component('dropdown-item-plain', DropdownItemPlain)
  }
}
