const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty'
})

con.connect((err) => {
    if(err) throw err
    console.log('MySQL Server connected')
    let sql = 'CREATE DATABASE mydb'
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log('Database mydb created')
    })
})