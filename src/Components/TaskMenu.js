import { useState } from "react";
import { useTask } from "../providers";

function TaskMenu() {
    const [task, setTask] = useTask();
    const [editTask, setEditTask] = useState('');

    const handleChange = ({ target }) => {
        setEditTask(target.value)
    }

    function handleRemove() {
        const div = task.filter((item) => item.class !== 'selected')
        div.map((item, index) => item._id = index)
        setTask(div)
    }
    
    function handleEdit() {
        const edit = task.filter((item) => item.class === 'selected')
        edit[0].task = editTask
        edit.map((item, index) => item._id = index)
        setEditTask('')
        setTask(edit)
    }

    return (
        <div className="task-menu">
            <button
                onClick={handleRemove}>
                Remove
            </button>
            <label htmlFor="edit">
                <input
                    id="edit"
                    placeholder="Edit Task"
                    type="text"
                    value={editTask}
                    onChange={handleChange}
                ></input>
                <button
                id="edit"
                onClick={handleEdit}
                >
                    Edit
                </button>

            </label>
        </div>
    );
}
export default TaskMenu;