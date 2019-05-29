import React, { useState, useEffect } from "react";

const TodoItem = props => {
    const [todo, setTodo] = useState(props.data);

    useEffect(() => {
        if (props.data !== todo) {
            props.handleTodoChange(todo);
        }
    }, [todo]);

    const handleChange = e => {
        if (e.target.name === "done") {
            setTodo({ ...todo, done: e.target.checked });
        } else {
            const value = e.target.value;
            setTodo({ ...todo, [e.target.name]: value });
        }
    };

    const handleDelete = () => {
        console.log(`Deleting ${todo.text}`);
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <input
                    type="checkbox"
                    name="done"
                    onChange={handleChange}
                    defaultChecked={todo.done}
                />
                
                <input
                    type="text"
                    name="text"
                    onChange={handleChange}
                    value={todo.text}
                />
                {" "}
                <button type="button" name="delete" onClick={handleDelete}>
                    X
                </button>
            </form>
        </div>
    );
};

export default TodoItem;
