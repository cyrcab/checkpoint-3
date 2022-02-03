import { useContext } from "react";
import { Route } from "react-router-dom";
import Auth from "../contexts/auth";

const PrivateRoute = ({ path, component }) => {
	const { isAuthenticate } = useContext(Auth);

	return isAuthenticate ? (
		<Route exact path={path} component={component} />
	) : (
		<Redirect to='/login' />
	);
};

export default PrivateRoute;
