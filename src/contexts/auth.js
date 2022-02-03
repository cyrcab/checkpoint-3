import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
	const [isAuthenticate, setIsAuthenticate] = useState(false);

	return (
		<UserContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
			{children}
		</UserContext.Provider>
	);
};
