const express = require('express')
const app = express()
const port = 8000
const connection = require('./config')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.post('/login', (req, res) => {
	const authData = req.body
	if (authData.email && authData.password) {
		connection.query(
			'SELECT email, password FROM user WHERE email = ? AND password = ?',
			[authData.email, authData.password],
			(err, results) => {
				console.log(authData)
				console.log(results)
				if (err) {
					res.status(500).send('Server error 500')
				} else if (results.length === 0) {
					res.send('Mauvais email ou mot de passe!')
				} else {
					res.status(200).send("C'est good")
				}
			}
		)
	}
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...')
	}

	console.log(`Server is listening on ${port}`)
})
