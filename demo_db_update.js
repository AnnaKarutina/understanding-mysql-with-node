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
    let sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log(result.affectedRows + " record(s) updated");
    })
})