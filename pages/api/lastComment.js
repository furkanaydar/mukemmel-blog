const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const comments = await db.query(escape`
      SELECT *
      FROM comments
    `)
  const length = comments.length
  res.status(200).json({ lastComment: comments[length-1] })
}