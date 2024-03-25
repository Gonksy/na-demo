module.exports = {
  getIndex: (req, res) => {
    // Responds to / with documentation
    res.render("index.ejs")
  },
}
