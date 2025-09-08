import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {

      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }

  const handleAdd = (e) => {

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleEdit = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    setTodo(todos[index].todo)

    let del = todos.filter(item => {
      return item.id !== id
    })
    setTodos(del)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let del = todos.filter(item => {
      return item.id !== id
    })
    setTodos(del)
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS()
  }
  const toggleChange = (e) => {
    setshowFinished(!showFinished)
  }

  const handleCheckbox = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()

  }


  return (
    <>
      <div className="container w-1/2 mx-auto bg-purple-200 my-5 p-4 min-h-[90vh]">
        <div className="addtodo">
          <h2 className='text-xl font-bold my-3'>Add a todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='bg-purple-100 w-2/3' />
          <button onClick={handleAdd} className='bg-purple-700 hover:bg-purple-900 p-3 py-1 mx-3 rounded-md text-white text-sm font-bold'>Add</button>
        </div>
        <input onChange={toggleChange} type="checkbox" name="" id="" /> Show Finished
        <h2 className='text-xl font-bold my-3'>Your todos</h2>

        <div className="todos">
          {todos.length < 2 && <div>No todos to display</div>}
          {todos.map(item => {
            return ((showFinished || item.isCompleted) &&
              <div key={item.id} className="todo flex">
                <input onChange={(e) => { handleCheckbox(e, item.id) }} type="checkbox" checked={item.isCompleted} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                <div className="buttons">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-purple-700 hover:bg-purple-900 p-3 py-1 mx-2 rounded-md text-white text-sm font-bold'>Edit</button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-purple-700 hover:bg-purple-900 p-3 py-1 mx-2 rounded-md text-white text-sm font-bold'>Delete</button>
                </div>

              </div>
            )
          })}


        </div>
      </div>
    </>
  )
}

export default App
