// src/app.ts

import express, { Application, Request, Response } from 'express';
import { Todo, TodoStatus } from './types';

const app: Application = express();
app.use(express.json());

let todos: Todo[] = [];

// Route zum Anzeigen aller TODOs
app.get('/todos', (req: Request, res: Response) => {
  res.json(todos);
});

// Route zum Hinzufügen eines neuen TODOs
app.post('/todos', (req: Request, res: Response) => {
  const { todo, deadline, assignee, owner, status }: Todo = req.body;
  const newTodo: Todo = {
    id: todos.length + 1,
    todo,
    deadline,
    assignee,
    owner,
    status: status || TodoStatus.NOT_STARTED
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
