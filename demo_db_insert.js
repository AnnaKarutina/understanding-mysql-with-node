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
    let sql = 'INSERT INTO customers (name, address) VALUES ("Company Inc", "Highway 37")'
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log('1 record inserted')
    })
})