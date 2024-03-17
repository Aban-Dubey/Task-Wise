import React from 'react';

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id)=>{
    const updatedList = taskList.filter(task => task.id!==id); //Keep only those tasks whose task.id does not match with id(to be deleted)
    setTaskList(updatedList);
  }
  const handleEdit = (id)=>{
    const selectedTask = taskList.find(task => task.id === id);
    setTask(selectedTask);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className='title'>ToDo</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button onClick={()=>setTaskList([])} className='clearAll' >Clear All</button>
      </div>
      <ul>
        {taskList.map((task)=>(
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={()=>handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={()=>handleDelete(task.id)} className="bi bi-trash"></i>
        </li>
        ))}
      </ul>
    </section>
  )
}
