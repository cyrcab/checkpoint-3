import { Routes, Route } from "react-router-dom";
import Connection from "./pages/Connexion";
import CreateAccount from "./pages/Register";
import Hello from "./pages/Hello";
import { UserContextProvider } from "./contexts/auth";

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route exact path='/' element={<Hello />} />
				<Route path='/login' element={<Connection />} />
				<Route path='/signup' element={<CreateAccount />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</UserContextProvider>
	);
}

export default App;
