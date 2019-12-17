import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axiosWithAuth from "../helpers/axios";
import { useParams } from "react-router-dom";

export default function AddFriend() {
	const [form, setForm] = useState({
		name: "",
		age: "",
		email: ""
	});
	let { id } = useParams();

	useEffect(() => {
		console.log(id !== undefined);

		if (id !== undefined) {
			axiosWithAuth()
				.get("/api/friends/" + id)
				.then(response => {
					console.log(response);
					setForm(response.data);
				})
				.catch(error => {
					console.log(error);
				});
		}
	}, []);

	const submit = e => {
		e.preventDefault();
		console.log("submit");
		if (form.name !== "") {
			id !== undefined
				? axiosWithAuth().put("/api/friends/" + id, {
						name: form.name,
						age: form.age,
						email: form.email
				  })
				: axiosWithAuth()
						.post("/api/friends", {
							name: form.name,
							age: form.age,
							email: form.email
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
	};

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	return (
		<>
			<h1>Add Friend:</h1>
			<form action="" onSubmit={submit}>
				<br />
				<TextField
					id="standard-basic"
					label="Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					variant="outlined"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Age"
					name="age"
					value={form.age}
					onChange={handleChange}
					variant="outlined"
					type="number"
				/>
				<br />
				<br />
				<TextField
					id="standard-basic"
					label="Email"
					name="email"
					value={form.email}
					onChange={handleChange}
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
