import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'
import Events from './components/Events'
import Home from './components/Home'
import Users from './components/Users'
import Logout from './components/Logout'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'

function App() {
	return (
		<Router>
			<div className='App'></div>

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
			<Navbar />
		</Router>
	)
}

export default App
