import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState({
		firstname: "",
		lastname: "",
		id: null,
		isAuthenticate: false,
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
