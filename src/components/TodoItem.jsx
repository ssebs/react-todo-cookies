import React, { useState, useEffect } from "react";

import {
    Button,
    Form,
    FormControl,
    FormCheck,
    TextArea
} from "react-bootstrap";

const TodoItem = props => {
    const [todo, setTodo] = useState(props.data);

    useEffect(() => {
        if (props.data !== todo) {
            props.handleTodoChange(todo);
        }
        // eslint-disable-next-line
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
        // console.log(`Deleting ${todo.text}`);
        props.handleDeleteTodo(todo.id);
    };

    return (
        <div className="m-1 mb-2 d-inline-block text-center" style={{ width:"50%", margin: "auto"}}>

        <Form
            inline
            onSubmit={e => {
                e.preventDefault();
            }}
            className="justify-content-center"
        >
            <FormCheck
                type="checkbox"
                name="done"
                onChange={handleChange}
                defaultChecked={todo.done}
            />

            <FormControl
                type="text"
                as="textarea"
                name="text"
                style={{ width: "256px" }}
                onChange={handleChange}
                value={todo.text}
            />

            <Button
                className="ml-1"
                variant="danger"
                size="sm"
                type="button"
                name="delete"
                onClick={handleDelete}
            >
                X
            </Button>
        </Form>
        </div>
    );
};

export default TodoItem;
