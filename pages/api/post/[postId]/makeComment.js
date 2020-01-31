const db = require('../../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const obj = JSON.parse(req.body);
    await db.query(escape`
        INSERT INTO comments (post_id, details, owner)
        VALUES (${obj.post_id}, ${obj.details}, ${obj.name})
    `)
    res.status(200)
}