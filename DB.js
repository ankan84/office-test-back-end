const sql = require('mysql2')


let connection = sql.createConnection({
    host: "sql6.freesqldatabase.com",
    port: 3306,
    user: "sql6583053",
    password: 'xnU4eRdc8b',
    database: 'sql6583053'
})

connection.connect((err) => {
    if (err) {
        console.log("unsuccessful")
    } else {
        console.log('successful')
    }
})


module.exports = connection