"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var types_1 = require("./types");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var todos = [];
// Route zum Anzeigen aller TODOs
app.get('/todos', function (req, res) {
    res.json(todos);
});
// Route zum Hinzufügen eines neuen TODOs
app.post('/todos', function (req, res) {
    var _a = req.body, todo = _a.todo, deadline = _a.deadline, assignee = _a.assignee, owner = _a.owner, status = _a.status;
    var newTodo = {
        id: todos.length + 1,
        todo: todo,
        deadline: deadline,
        assignee: assignee,
        owner: owner,
        status: status || types_1.TodoStatus.NOT_STARTED
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
