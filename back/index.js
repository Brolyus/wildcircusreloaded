const express = require('express')
const app = express()
const port = 8000
const connection = require('./config')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

passport.use(
	new LocalStrategy(
		{
			email: 'email',
			password: 'password'
		},
		function(user, password, done) {
			console.log(user)
			connection.query(
				'SELECT email, password FROM user WHERE email = ?',
				function(err, user) {
					if (err) {
						return done(err)
					}
					if (!user) {
						return done(null, false, {
							message: 'Mauvais identifiant.'
						})
					}
					if (!user.validPassword(password)) {
						return done(null, false, {
							message: 'Mauvais mot de passe.'
						})
					}
					return done(null, user)
				}
			)
		}
	)
)

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.post('/login', (req, res) => {
	console.log('ok')
	const authData = req.body
	if (authData.email && authData.password) {
		connection.query(
			'SELECT email, password FROM user WHERE email = ? AND password = ?',
			[authData.email, authData.password],
			(err, results) => {
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

app.get('/login', (req, res) => {
	res.send('Hello User')
})

app.get(
	'/users',
	// passport.authenticate('local', {
	// 	successRedirect: '/users',
	// 	failureRedirect: '/login',
	// 	failureFlash: false
	// }),
	(req, res) => {
		connection.query('SELECT * from user', (err, results) => {
			if (err) {
				res.sendStatus(500)
			} else {
				res.send(results)
			}
		})
	}
)

app.get(
	'/tickets',
	// passport.authenticate('local', {
	// 	successRedirect: '/users',
	// 	failureRedirect: '/login',
	// 	failureFlash: false
	// }),
	(req, res) => {
		connection.query('SELECT * from ticket', (err, results) => {
			if (err) {
				res.sendStatus(500)
			} else {
				res.send(results)
			}
		})
	}
)

app.get(
	'/guests',
	// passport.authenticate('local', {
	// 	successRedirect: '/users',
	// 	failureRedirect: '/login',
	// 	failureFlash: false
	// }),
	(req, res) => {
		connection.query('SELECT * from guest', (err, results) => {
			if (err) {
				res.sendStatus(500)
			} else {
				res.send(results)
			}
		})
	}
)

app.get('/wilders', (req, res) => {
	connection.query(
		'SELECT id, name, description, biography,image FROM wilder',
		(err, results) => {
			if (err) {
				res.sendStatus(500)
			} else {
				res.send(results)
			}
		}
	)
})

app.get('/activities', (req, res) => {
	connection.query(
		'SELECT id, name, description FROM activity',
		(err, results) => {
			if (err) {
				res.sendStatus(500)
			} else {
				res.send(results)
			}
		}
	)
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...')
	}

	console.log(`Server is listening on ${port}`)
})
