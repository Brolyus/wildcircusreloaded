import React from 'react'
import '../styles/Home.css'
import Slider from 'react-slick'
import axios from 'axios'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			wilderData: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:8000/wilders').then(response => {
			this.setState({ wilderData: response.data })
		})
	}
	render() {
		const settings = {
			className: 'center',
			dots: true,
			lazyLoad: true,
			centerMode: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500
		}
		return (
			<div>
				<h1>Wild Circus RELOADED</h1>
				<div className='about_us'>
					<h2>About us</h2>
					<p>
						{' '}
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Dicta, est illo placeat deleniti consequatur
						sapiente beatae! Non, libero necessitatibus dolor
						temporibus doloribus magni odio, nostrum est totam
						maiores vel earum.
					</p>
				</div>
				<div>
					<h2>Nos équipes</h2>
					<Slider {...settings}>
						{this.state.wilderData.map(wilder => {
							return (
								<div key={wilder.id}>
									<h3>{wilder.name}</h3>
									<p>{wilder.description}</p>
									<p>{wilder.biography}</p>
								</div>
							)
						})}
					</Slider>
				</div>
			</div>
		)
	}
}

export default Home
