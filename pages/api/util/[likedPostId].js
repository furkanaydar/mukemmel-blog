const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {

  await db.query(escape`
      UPDATE posts
      SET likes = likes+1
      WHERE slug = ${req.query.likedPostId}
    `)
  res.status(200).json({ response: 'liked'})
}