const express = require("express");
const User = require("../models/user");
const router = express.Router();

router
  .get('/getUsers', async (req, res) => {
    try {
      const users = await User.getAllUsers();
      res.status(200).send(users);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .post('/login', async (req, res) => {
    try {
      const user = await User.login(req.body);
      res.status(200).send({ ...user, Password: undefined }); 
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .post('/register', async (req, res) => {
    try {
      const user = await User.register(req.body);
      res.status(200).send({ ...user, Password: undefined }); 
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .delete('/delete/:id', async (req, res) => {
    try {
      const result = await User.deleteUser(req.params.id);
      res.status(200).send(result);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

  .put('/update/:id', async (req, res) => {
    try {
      const user = { ...req.body, UserID: req.params.id }; 
      const result = await User.updateUser(user);
      res.status(200).send(result);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  });

module.exports = router;
