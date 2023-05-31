import React, { useState } from "react";

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const HandleChange = (e) => {
        setValue(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={HandleSubmit}>
                <input type='text' className='TodoInput'
                       placeholder='Update Task...' onChange={HandleChange}
                       value={value}/>
                <button type='submit' className='todo-btn'>Update</button>
            </form>
        </div>
    )
}