const express = require('express')
const app = express()
const port = 8000
const connection = require('./config')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
	response.send('Hello World')
})

app.listen(port, err => {
	if (err) {
		throw new Error('Something bad happened...')
	}

	console.log(`Server is listening on ${port}`)
})
