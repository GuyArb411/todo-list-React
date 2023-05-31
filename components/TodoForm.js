import React, { useState } from "react";

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");

    const HandleChange = (e) => {
        setValue(e.target.value);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }

    return (
        <div>
            <form className='TodoForm' onSubmit={HandleSubmit}>
                <input type='text' className='TodoInput'
                placeholder='Enter a new task...' onChange={HandleChange}
                value={value}/>
                <button type='submit' className='todo-btn'>Add</button>
            </form>
        </div>
    )
}