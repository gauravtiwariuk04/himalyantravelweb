import { useEffect, useReducer, useRef, useMemo, useCallback } from 'react'
import { taskReducer, initialTasks } from '../reducer/taskReducer'
import Header from '../comonents/header'

export default function Tasks() {
  <Header/>
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)
  const inputRef = useRef()

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      dispatch({ type: 'load', payload: JSON.parse(saved) })
    }
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = useCallback(() => {
    const text = inputRef.current.value.trim()
    if (text !== '') {
      dispatch({ type: 'add', payload: text })
      inputRef.current.value = ''
    }
  }, [])

  const filteredTasks = useMemo(() => tasks.filter(t => !t.completed), [tasks])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Tasks</h2>
      <div className="flex gap-2 mb-4">
        <input ref={inputRef} className="border p-2 rounded flex-1" placeholder="New task..." />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-white dark:bg-gray-700 p-2 mb-2 rounded shadow"
          >
            <span>{task.text}</span>
            <button
              onClick={() => dispatch({ type: 'toggle', payload: task.id })}
              className="text-sm text-blue-600"
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
