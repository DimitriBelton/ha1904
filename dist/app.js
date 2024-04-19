"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const types_1 = require("./types");
const app = (0, express_1.default)();
app.use(express_1.default.json());
let todos = [];
// Route zum Anzeigen aller TODOs
app.get('/todos', (req, res) => {
    res.json(todos);
});
// Route zum Hinzufügen eines neuen TODOs
app.post('/todos', (req, res) => {
    const { todo, deadline, assignee, owner, status } = req.body;
    const newTodo = {
        id: todos.length + 1,
        todo,
        deadline,
        assignee,
        owner,
        status: status || types_1.TodoStatus.NOT_STARTED
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
