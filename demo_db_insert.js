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
    // let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
    /*
    let sql = `INSERT INTO customers (name, address) VALUES
        ('John', 'Highway 71'),
        ('Peter', 'Lowstreet 4'),
        ('Amy', 'Apple st 652'),
        ('Hannah', 'Mountain 21'),
        ('Michael', 'Valley 345'),
        ('Sandy', 'Ocean blvd 2'),
        ('Betty', 'Green Grass 1'),
        ('Richard', 'Sky st 331'),
        ('Susan', 'One way 98'),
        ('Vicky', 'Yellow Garden 2'),
        ('Ben', 'Park Lane 38'),
        ('William', 'Central st 954'),
        ('Chuck', 'Main Road 989'),
        ('Viola', 'Sideway 1633')`;
    */
    //let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')"
    // let sql = "INSERT INTO users (name, favorite_product) VALUES ('John', 154), ('Peter', 154), ('Amy', 155), ('Hannah', null), ('Michael', null)"
    let sql = "INSERT INTO products (id, name) VALUES (154, 'Chocolate Heaven'), (155, 'Tasty Lemons'), (156, 'Vanilla Dreams')"
    con.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
    })
})