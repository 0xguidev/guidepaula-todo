import { useTask } from "../providers";
import { useEffect, useState } from "react";

function TaskList() {
    const [task, setTask] = useTask();
    const [listTask, setListTask] = useState();

    useEffect(() => {
        setListTask(task)
    }, [task])

    return (
        <div className="task-list">
            {task.map((item, index) =>
                <div key={index}>
                <span>{`${item.status} `}</span><span>{item.date}</span>
                <p>{item.task}</p>
            </div>
            )}
        </div>
    );
}
export default TaskList;