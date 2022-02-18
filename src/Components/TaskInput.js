import { useState } from "react";
import { useTask } from "../providers";
import '../style/index.css'

function TaskInput() {
    const [task, setTask] = useTask();
    const [taskName, setTaskName] = useState('')

    const handleChange = ({ target }) => {
        setTaskName(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const objectTask = { 
            _id: task.length,
            class: '',
            task: taskName,
            date: new Date().toLocaleString(),
            status: 'pending',
        }
        await setTask([...task, objectTask])
        setTaskName('');
    }


    return (
        <form onSubmit={handleSubmit} className="div-input">
            <label>
                <input
                    name="input-task"
                    className="input-task input"
                    data-testid="input-task"
                    placeholder="Insert Task"
                    value={taskName}
                    onChange={handleChange}
                />
            </label>
            <input
                type="submit"
                name="button-task"
                value="Send"
                className="button-task button"
                data-testeid="button-task"
            />
        </form>
    );
}

export default TaskInput;