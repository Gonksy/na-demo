const express = require("express")
const router = express.Router()
const mainControllers = require("../controllers/mainControllers")

router.get("/", mainControllers.getIndex)

router.get("/dash", mainControllers.getDash)

module.exports = router
