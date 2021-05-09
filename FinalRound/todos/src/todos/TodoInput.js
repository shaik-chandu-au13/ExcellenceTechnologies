import React from 'react'

export default function TodoInput(props) {
    return (
        <div>
            <input name="todos" value={props.value} onChange={props.onChangeHandler} placeholder="enter a todo"/>
            <button onClick={props.onClickHandler} type="submit">Add</button>
        </div>
    )
}
