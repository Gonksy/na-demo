const users = require("../users.json")

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs")
  },
  getDash: (req, res) => {
    res.render("dash.ejs", { users: users })
  },
}
