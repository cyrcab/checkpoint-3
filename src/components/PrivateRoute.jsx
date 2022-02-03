import { useContext } from "react";
import { Routes, Route, useRoutes, useResolvedPath } from "react-router-dom";
import UserContext from "../contexts/auth";

const PrivateRoute = ({ children, to, ...props }) => {
	const { user } = useContext(UserContext);
	const { isAuthenticate } = user;
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });

	if (isAuthenticate) {
		return (
			<>
				<Route exact path={to} component={children} />;
			</>
		);
	} else {
		return (
			<>
				<Route to='/' component={component} />;
			</>
		);
	}
};

export default PrivateRoute;
