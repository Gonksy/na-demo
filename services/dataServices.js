const allUsers = require("../users.json")

module.exports = {
  fetchUsers: (req) => {
    let users = [...allUsers]
    let { minAge = 0, maxAge = 200, active, searchTerm, sort, ...invalidParams } = req.query
    minAge = minAge === "" ? 0 : parseInt(minAge)
    maxAge = maxAge === "" ? 200 : parseInt(maxAge)

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
    if (active && active !== "true" && active !== "false") {
      return { status: 400, error: "error: 'active' must be true, false, or empty" }
    }

    // Filter by age if a range is specified
    if (minAge !== 0 || maxAge !== 200) {
      users = users.filter((user) => user.age >= minAge && user.age <= maxAge)
    }

    // Filter active users
    if (active) {
      active = active === "true"
      users = users.filter((user) => user.active === active)
    }

    // Search by name
    if (searchTerm) {
      users = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }

    // Sort by last_login
    console.log("sort", sort)
    if (sort) {
      console.log("users sorted by last_login")
      users = users.sort((a, b) => new Date(b.last_login) - new Date(a.last_login))
    }

    return { status: 200, users: users }
  },
  generateStats: (req, res) => {
    const avgAgeAll = (allUsers.reduce((accumulator, user) => accumulator + user.age, 0) / allUsers.length).toFixed(1)
    const activeUsers = allUsers.filter((user) => user.active).length
    const inactiveUsers = allUsers.length - activeUsers
    return { avgAgeAll: avgAgeAll, activeUsers: activeUsers, inactiveUsers: inactiveUsers }
  },
}
