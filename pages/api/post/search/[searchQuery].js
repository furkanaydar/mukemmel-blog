const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
    console.log(req.query.searchQuery)
    let sql = `SELECT * FROM posts WHERE CONCAT(title, '', slug, '', details) LIKE "%` + req.query.searchQuery + '%"' 
    const post = await db.query(sql
    )
    console.log(post)
    res.json({ post: post })
};
