import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import GoalPieChart from './PieChart';
import { connect } from 'react-redux';
import { getGoalsThunk } from '../../../redux/reducers/goals';
import styles from './styles';

function HomeScreen(props) {
	const [allGoals, setGoals] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await props.getGoals();
			setGoals(props.goals);
			console.log('allGoals from redux thunk: ', allGoals);
			console.log('props.goals from redux thunk: ', props.goals);
		}
		fetchData();
	}, []);

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.headline}>My Goals</Text>
			</View>
			<View>
				{props.user.goals &&
					props.user.goals.map((goal) => {
						if (goal.status === 'active') {
							return <GoalPieChart key={goal.id} goal={goal} />;
						}
					})}
			</View>
		</>
	);
}

const mapState = (state) => ({
	user: state.user,
	goals: state.goals,
});

const mapDispatch = (dispatch) => ({
	getGoals: () => dispatch(getGoalsThunk()),
});

export default connect(mapState, mapDispatch)(HomeScreen);
