import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import upgrades from './modules/upgrades'
import reactants from './modules/reactants'
import currency from './modules/currency'
import prestige from './modules/prestige'
import power from './modules/power'
import heat from './modules/heat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    items,
    upgrades,
    reactants,
    currency,
    prestige,
    power,
    heat
  }
})
