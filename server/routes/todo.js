const express = require("express");
const ToDo = require("../models/todo");
const router = express.Router();

router
  .get('/getToDos/:userId', async (req, res) => {
    try {
      const todos = await ToDo.getUserToDos(req.params.userId);
      res.status(200).send(todos);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .post('/add', async (req, res) => {
    try {
      const newToDo = await ToDo.addToDo(req.body);
      res.status(200).send(newToDo);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .put('/update/:id', async (req, res) => {
    try {
      const todo = { ...req.body, ToDoItemID: req.params.id };
      const result = await ToDo.updateToDo(todo);
      res.status(200).send(result);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .delete('/delete/:id', async (req, res) => {
    try {
      const result = await ToDo.deleteToDo(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  });

module.exports = router;
