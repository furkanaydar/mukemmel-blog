const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {

  const postsList = await db.query(escape`
      SELECT *
      FROM posts
    `)
  res.status(200).json({ posts: postsList})
}