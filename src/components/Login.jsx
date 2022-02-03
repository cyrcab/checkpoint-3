const Login = () => {
	return (
		<>
			<form>
				<div>
					<label>Adresse mail :</label>
					<input type='text' name='mail' id='name' required />
				</div>
				<div>
					<label>Mot de passe :</label>
					<input type='password' name='password' id='password' />
				</div>
				<div>
					<input type='submit' value='Se connecter' />
				</div>
			</form>
		</>
	);
};

export default Login;
