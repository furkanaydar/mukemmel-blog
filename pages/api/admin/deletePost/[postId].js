const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {


    const result = await db.query(escape`
      DELETE FROM posts
      WHERE slug = ${req.query.postId}
    `)
    res.status(200)
    res.json({ success: true })
}