const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

export default async (req, res) => {
    let sql = `SELECT * FROM posts WHERE CONCAT(title, '', slug, '', details) LIKE "%` + req.query.searchQuery + '%" AND TYPE = ' + req.body.type
    const post = await db.query(sql
    )
    console.log(req.body)
    res.statusCode = 200
    res.json({ post: post })
};
