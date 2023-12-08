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
    let adr = 'Mountain 21'
    let sql = 'SELECT * FROM customers WHERE address = ?'
    con.query(sql, [adr], (err, result) => {
        if(err) throw err
        console.log(result)
    })
})