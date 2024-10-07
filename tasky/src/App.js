import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
    </div>
  );
}

export default App;