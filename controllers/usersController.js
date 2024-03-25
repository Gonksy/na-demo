const { fetchUsers, generateStats } = require("../services/dataServices")

module.exports = {
  getUsers: (req, res) => {
    // Responds to /users with JSON containing users
    const data = fetchUsers(req)
    const status = data.status
    const payload = data.users || data.error
    return res.status(status).json(payload)
  },
}
