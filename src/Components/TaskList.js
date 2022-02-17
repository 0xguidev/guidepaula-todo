import { useTask } from "../providers";
import { useEffect, useState } from "react";
import '../'

function TaskList() {
    const [task, setTask] = useTask();
    const [listTask, setListTask] = useState();

    useEffect(() => {
        setListTask(task)
    }, [task])

    function addClass(ind) {
        const tasks = task.map((item) => {
            return (item._id === ind) ?
                (item.class !== 'selected') ? { ...item, class: 'selected' } : { ...item, class: '' } :
                item
        })
        setTask(tasks)
    }

    return (
        <div className="task-list">
            {task.map((item, index) =>
                <div key={index} onClick={() => addClass(index)} >
                    <span>{`${item.status} `}</span><span>{item.date}</span>
                    <p>{item.task}</p>
                </div>
            )}
        </div>
    );
}
export default TaskList;