// const users = require("../users.json")
const { fetchUsers, generateStats } = require("../services/dataServices")

module.exports = {
  getDashboard: (req, res) => {
    // Responds to /dashboard with the dashboard view
    const data = fetchUsers(req)
    const stats = generateStats(req)
    const options = {
      stats: stats,
      ...(data.users && { users: data.users }),
      ...(data.error && { error: data.error }),
    }
    res.render("dashboard.ejs", options)
  },
  postSearch: (req, res) => {
    // Redirects to /getDashboard with query params submitted in dashboard form
    const params = req.body
    let url = `/dashboard?`

    for (const param in params) {
      const string = param + "=" + params[param] + "&"
      url += string
    }
    url = url.slice(0, url.length - 1)
    res.redirect(url)
  },
}
