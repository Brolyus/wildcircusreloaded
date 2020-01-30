import React from 'react'
import '../styles/Home.css'

class Home extends React.Component {
	render() {
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
			</div>
		)
	}
}

export default Home
