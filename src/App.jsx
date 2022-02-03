import { Routes, Route } from "react-router-dom";
import Connection from "./pages/Connexion";
import CreateAccount from "./pages/Register";
import { UserContextProvider } from "./contexts/auth";
import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin";
import Sidebar from "./components/dashboard/Sidebar";

function App() {
	return (
		<UserContextProvider>
			<>
				<Sidebar />
				<Routes>
					<Route path='/admin' element={<Admin />} />
					<Route path='/admin/reservations' element={<Admin/>} />
					<Route path='/admin/users' element={<Admin />} />
				</Routes>
			</>
			{/* <>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Connection />} />
					<Route path='/signup' element={<CreateAccount />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</> */}
		</UserContextProvider>
	);
}

export default App;
