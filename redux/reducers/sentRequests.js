import instance from "../axios";
import { firebase } from "../../src/firebase/config";

const SET_SENT_REQUESTS = "SET_SENT_REQUESTS";

const setSentRequests = sentRequests => ({ type: SET_SENT_REQUESTS, sentRequests });

export const getSentRequests = () => async dispatch => {
	try {
		const token = await firebase.auth().currentUser.getIdToken();
		const { data } = await instance.post("/friends/sent", { token });
		console.log("DATA", data);
		dispatch(setSentRequests(data));
	} catch (error) {
		console.log(error);
	}
};

export default function (state = [], action) {
	switch (action.type) {
		case SET_SENT_REQUESTS:
			return action.sentRequests;
		default:
			return state;
	}
}