import useState from './index'

export default function actions() {
  return {
    setCurrentStep(step) {
      const state = useState()

      state.$patch({
        step: {
          current: step
        }
      })
    }
  }
}