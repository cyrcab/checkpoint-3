import { Routes, Route } from "react-router-dom";
import Connection from "./pages/Connexion";
import CreateAccount from "./pages/Register";
import { UserContextProvider } from "./contexts/auth";
// import PrivateRoute from "./components/PrivateRoute";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ToolBox from "./components/dashboard/globalInfos/ToolBox";
import Profile from "./pages/Profile";
import UserList from "./components/dashboard/infosUser/UserList";
import ResaList from "./components/dashboard/reservationsInfos/ResaList";

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/login' element={<Connection />} />
				<Route path='/signup' element={<CreateAccount />} />
				<Route path='/admin' element={<Admin />}>
					<Route index element={<ToolBox />} />
					<Route path='users' element={<UserList />} />
					<Route path='reservations' element={<ResaList />} />
				</Route>
				<Route path='/profile' element={<Profile />} />
			</Routes>
		</UserContextProvider>
	);
}

export default App;
