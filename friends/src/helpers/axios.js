import axios from "axios";
// CREATE A WRAPPER FOR THE AXIOS LIBRARY

// This wrapper is a function that, when invoked,
// returns an axios instance that automatically
// puts the 'token' from browser's local storage
// into an 'Authorization' header of the request.

// Usage should look like: `withAuth().get('http://api.com/friends').then(etc)`
export default function withAuth() {
	const token = localStorage.getItem("token");

	const axiosInstance = axios.create({
		baseURL: "http://localhost:5000",
		headers: {
			"Content-Type": "application/json",
			Authorization: token
		}
	});

	return axiosInstance;
}
