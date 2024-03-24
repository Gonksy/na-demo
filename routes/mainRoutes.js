const express = require("express")
const router = express.Router()
const mainControllers = require("../controllers/mainControllers")

router.get("/", mainControllers.getIndex)

router.get("/dash", mainControllers.getDash)

router.get("/users", mainControllers.getUsers)

module.exports = router
