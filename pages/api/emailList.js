

const db = require('../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    const obj = JSON.parse(req.body);
    const check = await db.query(escape`
    SELECT * FROM mail_list 
    WHERE mail =  ${obj.mail}
    `)

    if (check[0] != null) {
        res.status(200).json({ status:false, })
    }
    else {
        await db.query(escape`
        INSERT INTO mail_list (mail)
        VALUES (${obj.mail})
        `)
        res.status(200).json({ status:true, })

    }

}