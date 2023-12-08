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
    let sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log(result);
    })
})