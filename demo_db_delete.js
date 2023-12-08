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
    let sql = "DELETE FROM customers WHERE address = 'Mountain 21'"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log("Number of records deleted: " + result.affectedRows)
    })
})