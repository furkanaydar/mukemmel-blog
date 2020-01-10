const db = require('../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
  const post = await db.query(escape`
  SELECT *
  FROM posts
  WHERE slug = ${req.query.postId}
`)
  res.json({ post: post })
};
