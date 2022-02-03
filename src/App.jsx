import { Routes, Route } from "react-router-dom";
import Connection from "./pages/Connexion";
import CreateAccount from "./pages/CreateAccount";
import Hello from "./pages/Hello";

function App() {
	return (
		<Routes>
			<Route exact path='/' element={<Hello />} />
			<Route path='/login' element={<Connection />} />
			<Route path='/signup' element={<CreateAccount />} />
		</Routes>
	);
}

export default App;
