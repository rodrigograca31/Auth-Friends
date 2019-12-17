import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Login} />
			{/* <Route exact path="/friends" component={FriendsList} /> */}
			<PrivateRoute exact path="/friends" component={FriendsList} />
		</div>
	);
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			localStorage.getItem("token") ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

export default App;
