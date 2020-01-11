const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
  const post = await db.query(escape`
  SELECT *
  FROM posts
  WHERE slug = ${req.query.postId}
`)
  const id = post[0].id
  const comments = await db.query(escape`
  SELECT *
  FROM comments
  WHERE post_id = ${id}
`)
  res.json({ comments: comments })
};
