const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'L3Wfcoudb',
    database: 'employeeSystem',
    insecureAuth: true,


});


app.post('/create', (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const salary = req.body.salary



    db.query('INSERT INTO employees (name, age, country, position, salary) VALUES (?,?,?,?,?)', [name, age, country, position, salary],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send('Values Inserted')
            }
        }
    )
})



app.listen(3012, () => {
    console.log('port 3012 running server');
})