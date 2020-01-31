import React, { Component } from 'react'
import axios from 'axios'
import '../styles/Form.css'

class Events extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activitiesData: null,
			newTicket: {
				firstname: '',
				lastname: ''
			}
		}
	}
	componentDidMount() {
		axios.get('http://localhost:8000/activities').then(response =>
			this.setState({
				activitiesData: response.data
			})
		)
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	submitForm = e => {
		const data = {
			firstname: this.state.firstnamename,
			lastname: this.state.lastname
		}
		axios
			.post('http://localhost:8000/activities', data)
			.then(alert('Billet réservé'))
	}

	render() {
		return this.state.activitiesData ? (
			<div>
				<div className='events'>
					<h2> Our Events </h2>
					{this.state.activitiesData.map(activity => {
						return (
							<div key={activity.id}>
								<h3>{activity.name}</h3>
								<p>{activity.description}</p>
							</div>
						)
					})}
				</div>
				<hr />
				<div className='buy_ticket'>
					<h2>Réservez vos billets:</h2>
					<form onSubmit={this.submitForm}>
						<>
							<label htmlFor='Nom'>Votre nom:</label>
							<input
								className='underlined no-focus'
								type='text'
								name='name'
								id='name'
								required
								onInput={this.onChange}
							/>
						</>
						<>
							<label htmlFor='participants'>
								Nombre d'invités :
							</label>
							<input
								className='underlined no-focus'
								type='number'
								name='participants'
								id='participants'
								required
								onInput={this.onChange}
							/>
						</>
						<button id='submit'>Réserver</button>
					</form>
				</div>
			</div>
		) : (
			<p> En chargement ... </p>
		)
	}
}

export default Events
