import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList"
import TaskMenu from "../Components/TaskMenu"
import '../style/index.css'



function TodoList() {
  return (
    <div className="todo-list">
      <TaskList />
      <TaskInput />
      <TaskMenu />
    </div>
  );
}

export default TodoList;
