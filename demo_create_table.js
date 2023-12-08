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
    // let sql = "CREATE TABLE customers (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))"
    // let sql = "CREATE TABLE users (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), favorite_product INT, PRIMARY KEY(id))"  
    let sql = "CREATE TABLE products (id int , name VARCHAR(255))" 
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log('Table products created')
    })
})