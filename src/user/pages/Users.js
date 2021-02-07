import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
	const USERS = [
		{
			id: "u1",
			name: "name1",
			image:
				"https://content.fortune.com/wp-content/uploads/2017/01/google.jpeg",
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
