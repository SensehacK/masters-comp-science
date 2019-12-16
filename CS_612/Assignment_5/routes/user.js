// User routes file.
const express = require('express')
const mysql = require('mysql')


const router = express.Router()


router.get('/messages', (req, res) => {
    console.log('Show some messages2222');
    res.end()

})


router.get('/custom_user', (req, res) => {
    var user1 = { firstName: 'Kautilya', lastName: 'Save' }

    const user2 = { firstName: 'Lebron', lastName: 'James' }

    res.json([user1, user2])

})

// Getting all the users
router.get('/users', (req, res) => {
    const connection = getConnection()

    const queryString = 'SELECT * FROM users_test'
    connection.query(queryString, (err, rows, field) => {

        if (err) {
            console.log('Error in the executing query', err);
            res.send('Something unexpected happened');
            // res.end()
        }

        if (rows.length === 0) {
            console.log('Empty row query');
            res.send('Query resulted no results, Please try with different input!')
            res.end()
        } else {
            console.log('Hi fetching users successfully', rows);
            const users = rows.map((row) => {
                return {
                    firstName: row.first_name,
                    lastName: row.last_name,
                    profession: row.profession,
                    country: row.country,
                    relation: row.relation
                }
            })
            res.json(users)
        }
    })
})

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    console.log('Fetching user ID', id);
    // res.send('Getting the user ID')

    const connection = getConnection();

    const queryString = 'SELECT * FROM users_test WHERE id = ?'
    connection.query(queryString, [id], (err, rows, fields) => {

        if (err) {
            console.log('Error in the executing query', err);
            res.send('Something unexpected happened');
            // res.end()
        }
        if (rows.length === 0) {
            console.log('Empty row query');
            res.send('Query resulted no results, Please try with different input!')
            res.end()
        } else {
            console.log('Hi fetching users successfully', rows);
            const users = rows.map((row) => {
                return {
                    firstName: row.first_name,
                    lastName: row.last_name,
                    profession: row.profession,
                    country: row.country,
                    relation: row.relation
                }
            })
            res.json(users)
        }

    })

    // res.end()
})


router.get('/users/:country', (req, res) => {
    const country = req.params.country;
    console.log('Fetching user country', country);
    // res.send('Getting the user country')

    const connection = getConnection();
    // SELECT * FROM users_test WHERE country = 'usa';
    const queryString = 'SELECT * FROM users_test WHERE country = ?'
    connection.query(queryString, [country], (err, rows, fields) => {

        if (err) {
            console.log('Error in the executing query', err);
            res.send('Something unexpected happened');
            // res.end()
        }
        if (rows.length === 0) {
            console.log(rows);

            console.log('Empty row query');
            res.send('Query resulted no results, Please try with different input!')
            res.end()
        } else {
            console.log('Hi fetching users successfully', rows);
            const users = rows.map((row) => {
                return {
                    firstName: row.first_name,
                    lastName: row.last_name,
                    profession: row.profession,
                    country: row.country,
                    relation: row.relation
                }
            })
            res.json(users)
        }

    })

    // res.end()
})


router.get('/users/:country/profession/:work', (req, res) => {
    const country = req.params.country;
    console.log('Fetching user country', country);

    const work = req.params.work;
    console.log('Fetching user work', work);

    // res.send('Getting the user country')

    const connection = getConnection();
    // SELECT * FROM users_test WHERE country = 'usa';
    // SELECT  *  FROM  users_test  WHERE  country = 'usa'  AND profession = 'programming';
    const queryString = 'SELECT * FROM users_test WHERE country = ? AND profession = ?'
    connection.query(queryString, [country, work], (err, rows, fields) => {

        if (err) {
            console.log('Error in the executing query', err);
            res.send('Something unexpected happened');
            // res.end()
        }
        if (rows.length === 0) {
            console.log(rows);

            console.log('Empty row query');
            res.send('Query resulted no results, Please try with different input!')
            res.end()
        } else {
            console.log('Hi fetching users successfully', rows);
            const users = rows.map((row) => {
                return {
                    firstName: row.first_name,
                    lastName: row.last_name,
                    profession: row.profession,
                    country: row.country,
                    relation: row.relation
                }
            })
            res.json(users)
        }

    })

    // res.end()
})







router.post('/user_create', (req, res) => {
    console.log('In user Create service API endpoint');
    console.log('Logging the req of post data', req.body);

    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const profession = req.body.profession
    const country = req.body.country
    const location = req.body.location
    const relation = req.body.relation


    const queryString = 'INSERT INTO users_test (first_name, last_name, profession, country, location, relation) VALUES (?, ?, ?, ?, ?, ?)'

    getConnection().query(queryString, [first_name, last_name, profession, country, location, relation], (err, results, field) => {

        if (err) {
            console.log('Error in the executing query', err);
            res.sendStatus(500);
            return;
        }
        console.log('Inserted data to Database', first_name, last_name, profession, country)

        // We can't use "res object while in the body of executing the query"
        // res.send('Inserted data to Database', first_name, last_name);
        res.end()
    })


    res.end()

})

// '172.17.0.2' By default set code to get this host for docker image.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kautilya',
    database: 'node_js'
})

const pool_heroku = mysql.createPool({
    host: 'host_name',
    user: 'username',
    password: 'password',
    database: 'database_name'
})


function getConnection() {
    return pool
}


module.exports = router