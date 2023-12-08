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
    let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))'
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log('Table customers created')
    })
})