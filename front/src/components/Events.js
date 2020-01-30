import React from 'react'
import '../styles/Events.css'
import axios from 'axios'

class Events extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			firstname: '',
			lastname: '',
			date: '',
			role: '',
			ticketDatas: [],
			qrcode: '',
			guests: []
		}
	}

	componentDidMount() {
		axios
			.all([
				axios.get('http://localhost:8000/users'),
				axios.get('http://localhost:8000/tickets'),
				axios.get('http://localhost:8000/guests')
			])
			.then(
				axios.spread((usersRes, ticketsRes, guestsRes) => {
					this.setState({
						email: usersRes.data[1].email,
						firstname: usersRes.data[1].firstname,
						lastname: usersRes.data[1].lastname,
						date: usersRes.data[1].date,
						role: usersRes.data[1].role,
						ticketDatas: ticketsRes.data,
						qrcode: ticketsRes.data[0].qrcode,
						guests: guestsRes.data
					})
				})
			)
	}
	render() {
		return (
			<div>
				<div className='profile'>
					<h2>Mes informations</h2>
					<p>Nom: {this.state.lastname}</p>
					<p>Prénom: {this.state.firstname}</p>
					<p>Membre depuis le: {this.state.date}</p>
				</div>
				<div className='ticket'>
					<h2>Mon ticket</h2>
					<img
						id='img_ticket'
						src='https://media.istockphoto.com/vectors/circus-ticket-template-vector-id1162477112'
					/>
					<div className='mon_ticket'>
						<img className='qrcode' src={this.state.qrcode} />
						<div className='test'>
							<h3>Liste de vos invités:</h3>
							<ul>
								{this.state.guests.map(guest => {
									return (
										<div className='guest_info'>
											<li>
												{guest.firstname}{' '}
												{guest.lastname}
											</li>
										</div>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Events
