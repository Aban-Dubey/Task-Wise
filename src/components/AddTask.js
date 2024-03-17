import React from 'react';

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e)=>{ //Since one button handles both 'Add' and 'Update' functionality, therefore if...else
    e.preventDefault();
    if(task.id){ //If task.id exists => We are in the edit mode currently
      const date = new Date();
      const updatedTasklist = taskList.map((todo)=>(
        todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo 
      ));
      setTaskList(updatedTasklist);
      setTask({});
    }else{ //Else we just want to add a new task
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTaskList([...taskList, newTask]);
      setTask({});
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ""} placeholder='Add Task' autoComplete='off' maxLength={25} onChange={e => setTask({...task, name: e.target.value})}/>
        <button type='submit'>{task.id ? "Update":"Add"}</button>
      </form>
    </section>
  )
}
