import React from "react";

const AddTaskForm = (props) => {
  <form onSubmit={props.submit}></form>
    

  return (
    <div>
      <form>
      <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>
    <br />
   
    <label for="priority">Priority:</label>
    
   
    <select id="priority" name="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
};


export default AddTaskForm;