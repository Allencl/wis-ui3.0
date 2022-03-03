import { createStore } from 'vuex'
import tabsModule from './tabs'

export default createStore({
  modules: {
    tabsStore: tabsModule,
  }
})
