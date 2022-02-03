import { Routes, Route } from "react-router-dom";
import Connection from "./pages/Connexion";
import CreateAccount from "./pages/Register";
import { UserContextProvider } from "./contexts/auth";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/login' element={<Connection />} />
				<Route path='/signup' element={<CreateAccount />} />
				<PrivateRoute path='/admin' element={<Admin />} />
				<PrivateRoute path='/profile' element={<Profile />} />
			</Routes>
		</UserContextProvider>
	);
}

export default App;
