import React from 'react'
import '../styles/Login.css'

const Login = () => {
	return (
		<div className='login'>
			<h2>Connexion</h2>
			<form>
				<label htmlFor='email' className='space:stack'>
					Adresse mail :
				</label>
				<input type='email' name='email' id='email' required />
				<label htmlFor='password' className='space:stack'>
					Mot de passe :
				</label>
				<input type='password' name='password' id='password' required />
				<button id='submit'>Se connecter</button>
			</form>
		</div>
	)
}

export default Login
