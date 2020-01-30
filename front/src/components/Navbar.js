import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
	return (
		<div className='nav'>
			<ul>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/users'>Users</Link>
				</li>
				<li>
					<Link to='/events'>Events</Link>
				</li>
				<li>
					<Link to='/login'>Sign In</Link>
				</li>
				<li>
					<Link to='/register'>Register</Link>
				</li>
				<li>
					<Link to='/logout'>Say bye</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
