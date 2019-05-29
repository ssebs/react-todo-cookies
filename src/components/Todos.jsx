import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

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
        console.log(tmp);
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
        console.log(tmp);
        setTodos(tmp);
        localStorage.setItem("todos", JSON.stringify(tmp));
    };

    return (
        <div>
            <h2>List of Todos:</h2>
            <button
                type="button"
                style={{ marginBottom: "15px" }}
                onClick={() => {
                    if (
                        window.confirm(
                            "Are you sure you want to clear your todo list?"
                        )
                    ) {
                        localStorage.removeItem("todos");
                        window.location.href = "/";
                    }
                }}
            >
                Clear all todos
            </button>

            {todos ? (
                <div>
                    {todos.map(todo => (
                        <div
                            style={{ marginBottom: "5px", display: "block" }}
                            key={todo.id}
                        >
                            <TodoItem
                                data={todo}
                                handleTodoChange={todo =>
                                    handleTodoChange(todo)
                                }
                                handleDeleteTodo={id => handleDeleteTodo(id)}
                            />
                        </div>
                    ))}
                    <button onClick={addTodoItem}>+ Add new item</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Todos;
