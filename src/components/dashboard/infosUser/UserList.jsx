import { useEffect, useState } from "react";
import User from "../cardStyle/User";
import axios from "axios";
import styled from "styled-components";

const UserList = () => {
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5001/api/users/")
			.then((res) => res.data)
			.then((user) => setUserList(user))
			.catch((err) => console.log(err));
	}, []);

	return (
		<ListContainer>
			{userList
				.filter((user) => user.roleId === 2)
				.map((user) => (
					<User {...user} />
				))}
		</ListContainer>
	);
};

const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
  background-color: var(--main-color);
  padding: 2em;
`;

export default UserList;
