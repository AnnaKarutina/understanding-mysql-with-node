const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'mydb'
})

con.connect((err) => {
    if(err) throw err
    console.log('MySQL Server connected')
    let sql = "DROP TABLE IF EXISTS customers"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
    })
})