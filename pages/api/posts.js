const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const postsList = await db.query(escape`
      SELECT *
      FROM posts
      WHERE type = 0
    `)
  const projectsList = await db.query(escape`
    SELECT *
    FROM posts
    WHERE type = 1
  `)
  res.status(200).json({ posts: postsList, projects: projectsList })
}