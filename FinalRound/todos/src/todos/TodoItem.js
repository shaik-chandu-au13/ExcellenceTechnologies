import React from 'react'

export default function TodoItem(props) {
    return (
            <div className="collection">
                <a href="#!" className="collection-item">{props.content}</a>
            </div>
        )
}
