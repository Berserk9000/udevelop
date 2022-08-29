const express = require('express');
const mysql = require ('mysql2')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Default response for any other request (Not Fprocess.envound)
app.use((req, res) => {
  res.status(404).end();
});

//Conect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL USERNAME,
        user: 'root',
        //  SQL PASS
        password:'',
        database: 'election'
    },
    console.log ('Connected to the election database.')
);


db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});