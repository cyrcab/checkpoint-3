const Signup = () => {
	return (
		<form>
			<div>
				<label>Rentrez votre adresse mail :</label>
				<input type='text' name='mail' id='mail' />
			</div>
			<div>
				<label>Nom :</label>
				<input type='text' name='lastname' id='lastname' />
			</div>
			<div>
				<label>Prénom :</label>
				<input type='text' name='firstname' id='firstname' />
			</div>
			<div>
				<label>Mot de passe :</label>
				<input type='password' name='password' id='password' />
			</div>
		</form>
	);
};

export default Signup;
