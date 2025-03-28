import { useState } from 'react'

function TodoForm({addTodo}) {
  const [value, setValue] = useState("");
  const handleSubmit = e =>{
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={value} type="text" className="todo-input" placeholder="What's the task today" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Add Task</button>
      </form>
  )
}

export default TodoForm
