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
    let name = 'Amy'
    let adr = 'Mountain 21'
    let sql = 'SELECT * FROM customers WHERE name = ? OR address = ?'
    con.query(sql, [name, adr], (err, result) => {
        if(err) throw err
        console.log(result)
    })
})