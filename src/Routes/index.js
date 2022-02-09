import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../Pages/TodoList";

function Paths() {
    return (
        <Routes>
            <Route
                path="/"
                element={ <TodoList /> }>
            </Route>
        </Routes>
    )
}

export default Paths;