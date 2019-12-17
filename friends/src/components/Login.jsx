import React, { useRef, useState } from "react";
import axios from "axios";

export default function Login(props) {
	const usernameRef = useRef();
	const passwordRef = useRef();
	const [isLoading, setIsLoading] = useState(false);

	const submit = () => {
		setIsLoading(true);
		axios
			.post("http://localhost:5000/api/login", {
				username: usernameRef.current.value,
				password: passwordRef.current.value
			})
			.then(res => {
				setIsLoading(false);
				// SUCCESS! Credentials are valid:
				//   1- Put the token string in local storage under a 'token' key
				localStorage.setItem("token", res.data.payload);
				// localStorage.setItem('token', JSON.stringify(myArray));
				//   2- Redirect users to the /quotes route
				props.history.push("/friends");
			})
			.catch(error => {
				// Alert a sensible message pulled from the error object
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login-inputs">
				username <input ref={usernameRef} type="text" />
				<br />
				password <input ref={passwordRef} type="text" />
			</div>

			<div>
				<button onClick={submit}>Submit</button>
			</div>
			{isLoading ? "loading" : ""}
		</div>
	);
}
