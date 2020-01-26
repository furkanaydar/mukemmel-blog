const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const projectsList = await db.query(escape`
    SELECT *
    FROM posts
    WHERE type = 1
  `)
  res.statusCode = 200
  res.json({ projects: projectsList })
}