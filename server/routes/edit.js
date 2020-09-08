const StudentsModel = require('../models/students');
const express = require('express');
const router = express.Router();


const edit = (router) => {
  router.put('/edit/:id', async (req, res) => {

    const { name, surname, email, homeAddress, hashedPassword, idNumber } = req.body;
    const toBeEdited = { name, surname, email, homeAddress, hashedPassword, idNumber }
    try {
      console.log('toBeEdited', toBeEdited)
      await StudentsModel.findAndModify({ _id: req.params.id }), toBeEdited, { new: true }, function (err, toBeEdited) {
        res.send(toBeEdited)
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { edit } 