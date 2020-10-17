import axios from 'axios';
import { firebase } from '../../src/firebase/config';

// ---------- ACTION TYPES ---------- //
const SET_GOALS = 'SET_GOALS';

// ---------- ACTION CREATORS ---------- //
export const gotGoals = (goals) => ({ type: SET_GOALS, goals });

const instance = axios.create({
	baseURL: 'https://accountabee.herokuapp.com/api/goals',
});

export const setGoalsThunk = (goals) => async (dispatch) => {
	try {
		let token = await firebase.auth().currentUser.getIdToken();
		console.log('set a token');
		console.log('goals: ', goals);
		let { data, status } = await instance.post('/', { goals, token });
		console.log('status is: ', status);
		if (status === 200) {
			dispatch(gotGoals(data));
		} else {
			console.log('error setting goals in database, status error: ', status);
		}
	} catch (error) {
		console.error(error);
	}
};

export const getGoalsThunk = () => async (dispatch) => {
	try {
		const token = await firebase.auth().currentUser.getIdToken();
		const { data } = await instance.get('/', { token });
		console.log('DATA IS HERE: ', data);
		dispatch(gotGoals(data));
	} catch (error) {
		console.log(error);
	}
};

export default function (state = [], action) {
	switch (action.type) {
		case SET_GOALS:
			return action.goals;
		default:
			return state;
	}
}
