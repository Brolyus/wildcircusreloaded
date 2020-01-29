import React from 'react'
import './App.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

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
						<Link to='/events'>Say bye</Link>
					</li>
				</ul>
			</div>

			<Switch>
				<Route exact path='/'>
					<Redirect to='/home' />
				</Route>
				<Route path='/home'>
					<p>Hello this is Home</p>
				</Route>
				<Route path='/users'>
					<p>Hello this is Users</p>
				</Route>
				<Route path='/events'>
					<p>Hello this is the events</p>
				</Route>
				<Route path='/register'>
					<p>Hello this were you will register</p>
				</Route>
				<Route path='/login'>
					<p>Hello this were you'll log</p>
				</Route>
				<Route path='/logout'>
					<p>Hello this is were we say goodbye</p>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
