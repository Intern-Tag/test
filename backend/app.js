let express = require("express");
let cors = require("cors");
const Todo = require("./models/todo.model");
const Subtask = require("./models/subtask.model");

const app = express();

app.options(
  "http://localhost:3000",
  cors({
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res, next) {
  return res.status(200).send("working");
});

app.get("/api/v1/todo", async function (req, res, next) {
  const todos = await Todo.getAll();
  console.log(todos);
  return res.status(200).json(todos);
});

app.post("/api/v1/todo", async function (req, res, next) {
  const title = req.body.title;
  let todo = new Todo(title);
  const createdRecord = await todo.save();
  return res.status(200).json(createdRecord);
});

app.patch("/api/v1/todo/:id", async function (req, res, next) {
  const todoId = req.params.id;
  const status = req.body.status;
  const updatedTodo = await Todo.updateStatus(todoId, status);
  // const todos = await Todo.getAll()
  return res.status(200).json({ todoId, status, updatedTodo });
});

app.post("/api/v1/todo/:id/subtask", async function (req, res, next) {
  const title = req.body.title;
  const todoId = req.params.id;
  let subtask = new Subtask(title);
  const createdSubtask = await subtask.save(todoId);
  return res.status(200).json({ title, todoId, createdSubtask });
});

app.patch("/api/v1/subtask/:subtaskId", async function (req, res, next) {
  const subtaskId = req.params.subtaskId;
  const status = req.body.status;
  const updatedSubtask = await Subtask.updateStatus(subtaskId, status);
  return res.status(200).json({ subtaskId, status, updatedSubtask });
});

module.exports = app;
