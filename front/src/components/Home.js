import React from 'react'
import '../styles/Home.css'
import Slider from 'react-slick'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {}
	render() {
		const settings = {
			className: 'center',
			centerMode: true,
			infinite: true,
			centerPadding: '60px',
			slidesToShow: 1,
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
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
						<div>
							<h3>6</h3>
						</div>
					</Slider>
				</div>
			</div>
		)
	}
}

export default Home
