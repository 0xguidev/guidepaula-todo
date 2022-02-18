import { useTask } from "../providers";
import { useEffect, useState } from "react";
import '../style/index.css'

function TaskList() {
    const [task, setTask] = useTask();
    const [listTask, setListTask] = useState();

    useEffect(() => {
        setListTask(task)
    }, [task])

    function clearClass() {
        const allSelected = document.querySelectorAll('.selected')
        allSelected.forEach((item) => item.classList.remove('sele'))
    }

    function addNewClass(ind) {
        const item = document.getElementById(`${ind}`)
        console.log(item)
        return (item.classList.contains('sele'))
            ? item.classList.remove('sele')
            : item.classList.add('sele')
    }

    function addClass(ind) {
        const tasks = task.map((item) => {
            return (item._id === ind)
                ? (item.class !== 'selected')
                    ? { ...item, class: 'selected' }
                    : { ...item, class: '' }
                : item
        })
        addNewClass(ind)
        setTask(tasks)
        clearClass()
    }

    return (
        <div className="task-list">
            {task.map((item, index) =>
                <div key={index} onClick={() => addClass(index)} id={`${index}`} className="task-div">
                    <div className="task-message-head">
                        <span className="item-status">
                            <button className="status-color yellow button"></button>
                            {` ${item.status}`}
                        </span>
                        <time className="item-date">{`  ${item.date}`}</time>
                    </div>
                    <p>{item.task}</p>
                </div>
            )}
        </div>
    );
}
export default TaskList;