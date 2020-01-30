const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const postSlug = await db.query(escape`
      SELECT *
      FROM posts
      WHERE id = ${req.query.postId}
    `)
    res.status(200).json({ postSlug: postSlug[0].slug, postTitle: postSlug[0].title })
}