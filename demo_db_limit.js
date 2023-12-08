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
    let sql = "SELECT * FROM customers LIMIT 2, 5"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log(result);
    })
})