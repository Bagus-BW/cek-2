import { defineStore, acceptHMRUpdate } from 'pinia'
import state from './state'
import getters from './getters'
import actions from './actions'

const useCheckout = defineStore('checkout', {
  // arrow function recommended for full type inference
  state: state,
  getters: getters,
  actions: {
    ...actions()
  }
})

// make sure to pass the right store definition, `useCheckout` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCheckout, import.meta.hot))
}

export default useCheckout
