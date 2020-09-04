const StudentsModel = require('../models/students');
const express = require('express');
const router = express.Router();

const { hashPassword } = require('../security/passwordManager');


const students = (router) => {
  router.post('/register', async (req, res) => {
    const { name, surname, email, password, idNumber, homeAddress } = req.body
    try {
      const hashedPassword = await hashPassword(password)
      const newUser = await new StudentsModel({ name, surname, email, hashedPassword, idNumber, homeAddress }).save();

      console.log("I'm user", newUser);
      res.sendStatus(201)
    } catch (e) {
      console.log(e)
    }
  })

  router.get('/students', async (req, res) => {
    try {
      const students = await StudentsModel.find();
      res.send(students)
    } catch (e) {
      console.log(e)
    }
  })


}

module.exports = { students };