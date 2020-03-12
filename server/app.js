const express = require("express")
const usersRoutes = require("./routes/users")

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/api", usersRoutes)

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})
