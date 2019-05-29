import React from "react";
import Todos from "./components/Todos";

const App = () => {
    return (
        <div>
            <h1>React Todo Cookies</h1>
            <p>
                This is a basic todo app that will be saved in your browser's
                "Cookies" (localStorage)
            </p>
            <hr />
            <Todos />
        </div>
    );
};

export default App;
