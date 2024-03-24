// const users = require("../users.json")
const { fetchUsers } = require("../services/dataServices")

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs")
  },
  getDash: (req, res) => {
    // Responds to dashboard requests
    const users = fetchUsers(req).users
    res.render("dash.ejs", { users: users })
  },
  getUsers: (req, res) => {
    // Responds to API calls
    const response = fetchUsers(req)
    const status = response.status
    const payload = response.users || response.error
    return res.status(status).json(payload)
  },
}
