import { useState } from 'react'

function EditTodoForm({editTask, task}) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = e =>{
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    editTask(value, task.id);
    setValue("");
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input value={value} type="text" className="todo-input" placeholder="Update the task" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="todo-btn">Update</button>
    </form>
  )
}

export default EditTodoForm
