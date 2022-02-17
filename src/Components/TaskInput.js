import { useState } from "react";
import { useTask } from "../providers";

function TaskInput() {
    const [task, setTask] = useTask();
    const [taskName, setTaskName] = useState('')

    const handleChange = ({ target }) => {
        setTaskName(target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await setTask([...task, { task: taskName, date: new Date().toLocaleString(), status: 'pending' }])
        setTaskName('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                    name="input-task"
                    className="input-task"
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
                className="button-task"
                data-testeid="button-task"
            />
        </form>
    );
}

export default TaskInput;