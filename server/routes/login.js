const Student = require("../models/students");
const { comparePassword } = require('../security/passwordManager')

const signIn = (app) => {
  app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await Student.findOne({ email });
      if (user) {
        const isThere = await comparePassword(password, email);
        if (isThere) {
          return res.sendStatus(200);
        }
        if (!isThere) {
          return res.json({ error: "password or email exists" });
        }
      } else {
        return res.json({ error: "user does not exist" });
      }
    } catch (err) {
      res.send(500)
    }

  })
}

module.exports = { signIn } 