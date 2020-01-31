const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const obj = JSON.parse(req.body);
    const query = await db.query(escape`
        INSERT INTO posts (title, slug, details, img_url, type, tags)
        VALUES (${obj.title}, ${obj.slug}, ${obj.details}, ${obj.img_url},  ${obj.type}, ${obj.tags})
    `)
    res.status(200)
    res.json({ success: true})
}