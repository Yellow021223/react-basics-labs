import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today",priority:"Low", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow",priority:"Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority:"High",done: false}
    ]
  });
   // 处理任务完成状态切换的事件
  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
  }
  // 处理任务删除的事件
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);// 删除任务
    setTaskState({tasks});// 更新任务状态
  }    
  
  const [ formState, setFormState ] = useState({
      title: "",
      description: "",
      deadline: ""
    }); 

  // 处理表单输入改变的事件
  const formChangeHandler = (event) => {
      let form = {...formState};
  
      switch(event.target.name) {
        case "title":
            form.title = event.target.value;
            break;
        case "description":
            form.description = event.target.value;
            break;
        case "deadline":
            form.deadline = event.target.value;
            break;
        default:
            form = formState;
      }
      setFormState(form);
    }  
  const formSubmitHandler = (event) => {
      event.preventDefault();
  
      const tasks = [...taskState.tasks];
      const form = {...formState};
  
      form.id = uuidv4();
      
      tasks.push(form);
      setTaskState({tasks});
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    }  
    

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          priority={task.priority}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask = {() => deleteHandler(index)}
        />
      ))}
      
      <AddTaskForm change={formChangeHandler} />
      console.log(formState);
    </div>
  );
} 

export default App;
