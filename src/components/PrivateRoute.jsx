import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../contexts/auth";

const PrivateRoute = ({ path, component }) => {
	const { user } = useContext(UserContext);
	const { isAuthenticate } = user;

	return isAuthenticate ? (
		<Route exact path={path} component={component} />
	) : (
		<Redirect to='/' component={component}/>
	);
};

export default PrivateRoute;
