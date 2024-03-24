const allUsers = require("../users.json")

module.exports = {
  fetchUsers: (req) => {
    let users = allUsers
    let { minAge = 0, maxAge = 200, active, searchTerm, sort, ...invalidParams } = req.query
    minAge = parseInt(minAge)
    maxAge = parseInt(maxAge)

    // Validate param names
    if (Object.keys(invalidParams).length) {
      return {
        status: 400,
        error: "error: Invalid query parameters. Valid params: 'minAge', 'maxAge', 'active', 'searchTerm'",
      }
    }

    // Validate minAge, maxAge
    if (isNaN(minAge) || isNaN(maxAge) || minAge < 0 || maxAge > 200) {
      return { status: 400, error: "error: 'minAge', 'maxAge' must be numbers between 0-200" }
    }

    // Validate active
    if (active !== undefined && active !== "true" && active && "false") {
      return { status: 400, error: "error: 'active' must be true or false" }
    }

    // Filter by age if a range is specified
    if (minAge !== 0 || maxAge !== 200) {
      users = users.filter((user) => user.age >= minAge && user.age <= maxAge)
    }

    // Filter active users
    if (active !== undefined) {
      active = active === "true"
      users = users.filter((user) => user.active === active)
    }

    // Search by name
    if (searchTerm) {
      users = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Sort by last_login
    if (sort) {
      users = users.sort((a, b) => new Date(b.last_login) - new Date(a.last_login))
    }

    return { status: 200, users: users }
  },
  generateAnalytics: (req, res) => {
    const avgAgeAll = allUsers.reduce((a, b) => a.age + b.age) / allUsers.length
    console.log(avgAgeAll)
  },
}
