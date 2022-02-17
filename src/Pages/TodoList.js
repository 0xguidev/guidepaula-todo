import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList"
import TaskMenu from "../Components/TaskMenu"



function TodoList() {
  return (
    <div className="TodoList">
      <TaskInput />
      <TaskList />
      <TaskMenu />
    </div>
  );
}

export default TodoList;
