const sort = document.getElementById('sort')

export default function createDice() {
  const state = {
    num: 0,
    observers: []
  }

  const sortNumber = () => {
    state.num = Math.ceil(Math.random() * 6)
    notifyAll()
  }

  const subscribe = func => {
    state.observers.push(func)
  }

  const notifyAll = () => {
    for (const observer of state.observers) {
      observer(state.num)
    }
  }

  sort.addEventListener('click', sortNumber)

  return {
    subscribe
  }
}
