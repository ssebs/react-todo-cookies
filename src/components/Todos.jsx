import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

import { Button } from "react-bootstrap";

const Todos = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        // load todos from localStorage
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        } else {
            setTodos([
                {
                    id: 1,
                    text: "First todo item",
                    done: true
                },
                {
                    id: 2,
                    text: "",
                    done: false
                }
            ]);
        }
    }, []);

    const handleTodoChange = newTodo => {
        const tmp = todos.map(todo => {
            if (todo.id === newTodo.id) {
                todo = newTodo;
            }
            return todo;
        });
        // console.log(tmp);
        setTodos(tmp);
        localStorage.setItem("todos", JSON.stringify(tmp));
    };

    const addTodoItem = () => {
        const newID = todos[todos.length - 1].id + 1;
        setTodos([
            ...todos,
            {
                id: newID,
                text: "",
                done: false
            }
        ]);
    };

    const handleDeleteTodo = id => {
        const tmp = todos.filter(todo => todo.id !== id);
        // console.log(tmp);
        setTodos(tmp);
        localStorage.setItem("todos", JSON.stringify(tmp));
    };

    return (
        <div>
            <div className="text-center">
                <h2>List of Todos:</h2>
                <Button
                    type="button"
                    size="sm"
                    variant="outline-danger"
                    onClick={() => {
                        if (
                            window.confirm(
                                "Are you sure you want to clear your todo list?"
                            )
                        ) {
                            localStorage.removeItem("todos");
                            window.location.href = "#";
                        }
                    }}
                >
                    Clear all todos
                </Button>
            </div>
            {todos ? (
                <div className="justify-content-center text-center">
                {/* <div> */}
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            data={todo}
                            handleTodoChange={todo => handleTodoChange(todo)}
                            handleDeleteTodo={id => handleDeleteTodo(id)}
                        />
                    ))}
                    <div className="clearfix"/>
                    <Button className="mt-2" onClick={addTodoItem}>
                        + Add new item
                    </Button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Todos;
