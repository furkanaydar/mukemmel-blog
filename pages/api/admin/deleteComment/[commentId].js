const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {


    const result = await db.query(escape`
      DELETE FROM comments
      WHERE id = ${req.query.commentId}
    `)
    res.status(200)
    res.json({ success: true })
}