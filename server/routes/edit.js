const StudentsModel = require('../models/students');
const express = require('express');
const router = express.Router();
const { hashPassword } = require('../security/passwordManager');


const edit = (router) => {
  router.put('/edit/:id', async (req, res) => {

    const { name, surname, email, homeAddress, password, idNumber } = req.body;
    const hashedPassword = await hashPassword(password)

    const toBeEdited = { name, surname, email, homeAddress, hashedPassword, idNumber }
    try {
      console.log('toBeEdited', toBeEdited)
      await StudentsModel.findByIdAndUpdate({ _id: req.params.id }, toBeEdited, { new: true })
      res.send(toBeEdited)

    } catch (err) {
      console.log(err)
      res.send(500)
    }

  })
}

module.exports = { edit } 