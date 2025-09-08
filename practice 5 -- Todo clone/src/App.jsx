import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }


  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }
  const handleEdit = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let del = todos.filter(item => {
      return item.id !== id
    })
    setTodos(del)
    setTodo(todos[index].todo)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
    saveToLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }

  return (
    <>
      <div className="container w-1/2 mx-auto bg-amber-300 p-4">
        <h2 className='font-bold text-2xl m-5'>Add a todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='bg-amber-50' />
        <button onClick={handleAdd} disabled={todo.length < 3} className='bg-amber-800 rounded-2xl p-3 py-1 mx-3 disabled:bg-amber-600 text-white font-bold'>Add</button>
        <h2 className='font-bold text-2xl m-5'>Your todo</h2>

        <div className="todos">
          {todos.length === 0 && <div>No todos to display</div>}
          {todos.map(item => {

            return (
              <div key={item.id} className="todo">
                <div className="flex items-center justify-between w-1/2">
                  <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                  <div className="buttons my-2">

                    <button name={item.id} onClick={handleEdit} className='bg-amber-800 rounded-2xl p-3 py-1 mx-2'>Edit</button>
                    <button name={item.id} onClick={(e) => { handleDelete(e, item.id) }} className='bg-amber-800 rounded-2xl p-3 py-1 mx-2'>Delete</button>
                  </div>
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
