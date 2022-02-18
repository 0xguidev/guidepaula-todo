import { useEffect, useState } from "react";
import { useTask } from "../providers";
import '../style/index.css'

function TaskMenu() {
    const [task, setTask] = useTask();
    const [editTask, setEditTask] = useState('');
    const [itemStatus, setStatus] = useState('pending');
    const [canEdit, setCanEdit] = useState(true);
    const [itemSelect, setItemSelect] = useState([]);

    const handleChange = ({ target }) => {
        setEditTask(target.value)
    }

    useEffect(() => {
        const div = task.filter((item) => item.class === 'selected')
        setItemSelect(div)
    }, [task])

    useEffect(() => {
        (itemSelect.length > 0) ? setCanEdit(false) : setCanEdit(true)
    }, [itemSelect])

    function handleRemove() {
        const div = task.filter((item) => item.class !== 'selected')
        div.map((item, index) => item._id = index)
        div.map((item) => item.class = '')
        setTask(div)
    }

    function handleEdit() {
        itemSelect[0].task = editTask
        itemSelect.map((item, index) => item._id = index)
        itemSelect.map((item) => item.class = '')
        setEditTask('')
        setTask(itemSelect)
    }

    function handleSelect({ target }) {
        setStatus(target.value)
    }

    function handleChangeStatus() {
        const edit = task.map((item) => (item.class === 'selected') ? { ...item, status: itemStatus } : item)
        edit.map((item) => item.class = '')
        setTask(edit)
    }

    return (
        <form className="task-menu">
            <div className="div-edit">
                <label htmlFor="edit">
                    <input
                        id="edit"
                        placeholder={'Edit Task'}
                        type="text"
                        className="input"
                        value={editTask}
                        onChange={handleChange}
                    ></input>
                    <button
                        type="button"
                        id="edit"
                        className="button"
                        onClick={handleEdit}
                        disabled={canEdit}
                    >
                        Edit
                    </button>
                </label>
            </div>
            <div className="div-select">
                <label>
                    <select value={itemStatus} onChange={handleSelect} className="input" >
                        <option value="pending">pending</option>
                        <option value="running">running</option>
                        <option value="done">done</option>
                    </select>
                </label>
                <button
                    type="button"
                    className="button"
                    onClick={handleChangeStatus}
                    disabled={canEdit}
                >
                    Change Status
                </button>
            </div>
            <div className="div-remove">
                <button
                    type="button"
                    onClick={handleRemove}
                    disabled={canEdit}
                    className="remove-button "
                >
                    Remove
                </button>
            </div>
        </form >
    );
}
export default TaskMenu;