const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// In-memory data
let todos = [];
let id = 1;

// CREATE
app.post("/todos", (req, res) => {
    const { task } = req.body;

    if (!task) {
        return res.status(400).json({ message: "Task is required" });
    }

    const newTodo = {
        id: id++,
        task,
        completed: false
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// READ
app.get("/todos", (req, res) => {
    res.json(todos);
});

// UPDATE
app.put("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    if (req.body.task !== undefined) {
        todo.task = req.body.task;
    }

    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }

    res.json(todo);
});

// DELETE
app.delete("/todos/:id", (req, res) => {
    const todoId = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== todoId);
    res.json({ message: "Todo deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("TODO API running on port 3000");
});
