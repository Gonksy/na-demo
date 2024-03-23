const express = require("express")
const app = express()
const logger = require("morgan")
const mainRoutes = require("./routes/mainRoutes.js")
require("dotenv").config({ path: "./.env" })

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger("dev"))

app.use("/", mainRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server is running, better cach it")
})
