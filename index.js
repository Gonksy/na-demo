const express = require("express")
const app = express()
const logger = require("morgan")
const cors = require("cors")
const mainRoutes = require("./routes/mainRoutes.js")
const usersRoutes = require("./routes/usersRoutes.js")
const dashboardRoutes = require("./routes/dashboardRoutes.js")
require("dotenv").config({ path: "./.env" })

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger("dev"))
app.use(cors())

app.use("/", mainRoutes)
app.use("/", usersRoutes)
app.use("/", dashboardRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running, better catch it")
})
