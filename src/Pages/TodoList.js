import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList"



function TodoList() {
  return (
    <div className="TodoList">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default TodoList;
