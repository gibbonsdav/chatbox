const express = require("express")
const router = express.Router()
conn = require("./db")
const sha512 = require("js-sha512")

router.post("/users", (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password)
  const salt = randomString(20)
  console.log(password)
  console.log(salt)

  res.json({
    ps: password
    salt: salt
  })
})

function randomString(length) {
  const vals =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?"
  let random = ""
  for (let i = 0; i < length; i++) {
    random += vals.charAt(Math.floor(Math.random() * vals.length))
  }
  return random
}

module.exports = router
