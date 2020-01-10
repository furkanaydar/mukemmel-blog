const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: 'remotemysql.com',
    database: 'jBGXFPqnkz',
    user: 'jBGXFPqnkz',
    password: 'o4Q54DBwQD'
  }
})

exports.query = async query => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}