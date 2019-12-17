import React, { useEffect, useState } from "react";
import axiosWithAuth from "../helpers/axios";
import { NavLink } from "react-router-dom";

export default function FriendsList(props) {
	const [friends, setFriends] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			.get("/api/friends")
			.then(response => {
				console.log(response);
				setFriends(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<NavLink to="/add">Add friend</NavLink>
			<h1>Friends: </h1>
			{friends.map(friend => {
				return (
					<div>
						<b>Name</b>: {friend.name}
						<br />
						<b>Age</b>: {friend.age}
						<br />
						<b>Email</b>: {friend.email}
						<br />
						<br />
						<br />
					</div>
				);
			})}
		</>
	);
}
