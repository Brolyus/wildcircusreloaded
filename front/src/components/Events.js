import React from 'react'
import '../styles/Events.css'
import axios from 'axios'

class Events extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: '',
			lastname: '',
			date: '',
			role: '',
			qrcode: '',
			user_id: null,
			guest_id: null
		}
	}

	componentDidMount() {
		axios
			.all([
				axios.get('http://localhost:3000/users'),
				axios.get('http://localhost:3000/tickets')
			])
			.then(
				axios.spread((usersRes, ticketsRes) => {
					console.log(usersRes + ' et ' + ticketsRes)
				})
			)
	}
	render() {
		return (
			<div>
				<div className='profile'>
					<h2>Mes informations</h2>
					<p>Hello this is the events</p>
				</div>
				<div className='ticket'>
					<h2>Mon ticket</h2>
					<img src='https://media.istockphoto.com/vectors/circus-ticket-template-vector-id1162477112' />
				</div>
			</div>
		)
	}
}

export default Events
