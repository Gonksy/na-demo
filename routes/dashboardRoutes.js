const express = require("express")
const router = express.Router()
const dashboardController = require("../controllers/dashboardController")

router.get("/dashboard", dashboardController.getDashboard)
router.post("/dashboard/userSearch", dashboardController.postSearch)

module.exports = router
