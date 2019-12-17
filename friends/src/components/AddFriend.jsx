import React, { useRef } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "../helpers/axios";

export default function AddFriend() {
	const nameRef = useRef();
	const ageRef = useRef();
	const emailRef = useRef();

	const submit = e => {
		e.preventDefault();
		console.log("submit");
		if (nameRef.current.children[1].children[0].value !== "") {
			axios()
				.post("/api/friends", {
					name: nameRef.current.children[1].children[0].value,
					age: ageRef.current.children[1].children[0].value,
					email: emailRef.current.children[1].children[0].value
				})
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		} else {
			alert("emtpy");
		}

		console.log(emailRef.current.children[1].children[0].value);

		nameRef.current.children[1].children[0].value = "";
		ageRef.current.children[1].children[0].value = "";
		emailRef.current.children[1].children[0].value = "";
	};
	return (
		<>
			<h1>Add Friend:</h1>
			<form action="" onSubmit={submit}>
				<br />
				<TextField
					id="standard-basic"
					label="Name"
					ref={nameRef}
					name="name"
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Age"
					ref={ageRef}
					name="age"
					variant="outlined"
					type="number"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Email"
					ref={emailRef}
					name="email"
					variant="outlined"
					type="email"
				/>
				<br />
				<br />
				<Button variant="contained" color="secondary" onClick={submit}>
					Submit
				</Button>
			</form>
		</>
	);
}
