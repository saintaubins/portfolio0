import React, { useEffect } from 'react';

import './Todos.css';

const Todos = (props) => {
    const { setState } = props
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            const fiveFirstTodos = data.slice(0, 6)
            setState(state => ({ ...state, todos: fiveFirstTodos }))
        });
    }, []);
const renderTodos = () => {
    return props.todos.map(todo => {
        return (<li className="todos-widget-list-item" key={todo.id}>
            {todo.title}
        </li>
        )
    })
}
    console.log(props.todos);
    return (
        <div>
            <ul className="todos-widget-list">
                {renderTodos()}
            </ul>
        </div>
    )
}
export default Todos;
