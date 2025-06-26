export const initialTasks = []

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return action.payload
    case 'add':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'toggle':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )
    default:
      return state
  }
}
