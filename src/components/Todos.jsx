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

    return (
        <div>
            <p>List of Todos:</p>
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
