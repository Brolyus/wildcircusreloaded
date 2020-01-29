import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'
import Events from './components/Events'
import Home from './components/Home'
import Users from './components/Users'
import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'

function App() {
	return (
		<Router>
			<div className='App'>
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

			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					<Home />
				</Route>
				<Route path='/users'>
					<Users />
				</Route>
				<Route path='/events'>
					<Events />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/logout'>
					<Logout />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
