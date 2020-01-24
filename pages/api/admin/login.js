const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const obj = JSON.parse(req.body);
    const result = await db.query(escape`SELECT * FROM admins WHERE username = ${obj.username} AND password = ${obj.pass}`)
    res.status = 200
    res.json({ isAdmin: result.length })
}