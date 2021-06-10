import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => {
            console.log(res);
            const responseTodos = res.data;
            setTodos(responseTodos);
        })
        .catch(err => {
            console.error(err); 
        });
    }, []);

    return (
        <div>
            <h2>To Do List</h2>
            {todos && todos.map(todo => {
                const {id, userId, title} = todo;
                return (
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned to : {userId}</h6>
                    </div>
                )
            })}
        </div>
    );
};

export default TodoList;