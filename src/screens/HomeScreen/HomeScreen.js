import React, { useEffect, useState } from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import GoalPieChart from './PieChart';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton';
import { getGoalsThunk } from '../../../redux/reducers/goals';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { getUser } from '../../../redux/reducers/users';
import ConfettiCannon from 'react-native-confetti-cannon';

const pieCalculations = (completedDays, frequency) => {
	const pieData = [],
		graphicColor = [];
	for (let i = 1; i <= frequency; i++) {
		pieData.push({ x: i, y: 1 });
		if (completedDays) {
			graphicColor.push('#9FC78A');
			completedDays--;
		} else {
			graphicColor.push('#DCDCDC');
		}
	}
	return [pieData, graphicColor];
};
const successMessages = [
	"You achieved all your goals\nfor the week!\nYou're an absolute rockstar!",
	'You achieved all your goals\nfor the week!\nAmazing!',
	'You achieved all your goals\nfor the week!\nBask in the glory of your empty to-do list.',
	'You achieved all your goals\nfor the week!\nGreat work!',
	'You achieved all your goals\nfor the week!\nYou should be really proud of yourself!',
	"You achieved all your goals\nfor the week!\nYou're unstoppable!",
	'You achieved all your goals\nfor the week!\nLook at you go!',
	'You achieved all your goals\nfor the week!\nAwesome work staying on task!',
];

const messageGenerator = () => {
	const num = Math.floor(Math.random() * (7 - 1));
	return successMessages[num];
};

function HomeScreen(props) {
	const [explode, setExplosion] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [pieGoals, setPieGoals] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await props.getGoals();
			await props.getUser();
		}
		fetchData();
	}, []);

	useEffect(() => {
		setPieGoals(props.goals);
		if (
			props.goals.length &&
			props.goals.every((goal) => goal.completedDays >= goal.frequency) &&
			!explode
		) {
			setExplosion(true);
			setModalVisible(true);
		} else {
			setExplosion(false);
		}
	}, [props.goals]);

	useEffect(() => {
		setPieGoals(props.goals);
	}, [props.goals]);

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.headline}>My Goals</Text>
			</View>
			<View>
				<ScrollView>
					{props.goals.length ? (
						props.goals
							.sort((a, b) => a.id - b.id)
							.map((goal) => {
								if (goal.status === 'active') {
									const [data, graphicColor] = pieCalculations(
										goal.completedDays,
										goal.frequency
									);
									return (
										<GoalPieChart
											graphicColor={graphicColor}
											data={data}
											key={goal.id}
											goal={goal}
											navigation={props.navigation}
										/>
									);
								}
							})
					) : (
						<Text style={styles.noGoals}>
							You don’t have any goals set!{'\n\n'}Click the button below{'\n'}
							to create some goals and{'\n'}start achieving them.
						</Text>
					)}
					<View style={styles.fullScreen}>
						<CustomButton
							title={pieGoals.length ? 'EDIT GOALS' : 'SET GOALS'}
							style={styles.button}
							onPress={() => props.navigation.push('Set Goals')}
						/>
					</View>
					{explode && (
						<ConfettiCannon
							explosionSpeed={2000}
							count={300}
							origin={{ x: -100, y: -100 }}
							fadeOut={true}
						/>
					)}
					<View style={styles.centeredView}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
						>
							<View style={styles.centeredView}>
								<View style={styles.modalView}>
									<Text style={styles.modalText}>{messageGenerator()}</Text>
									<TouchableHighlight>
										<AntDesign
											name="closecircleo"
											size={24}
											color="#8688BC"
											style={styles.xbutton}
											onPress={() => {
												setModalVisible(!modalVisible);
											}}
										/>
									</TouchableHighlight>
								</View>
							</View>
						</Modal>
					</View>
				</ScrollView>
			</View>
		</>
	);
}

const mapState = (state) => ({
	goals: state.goals,
});

const mapDispatch = (dispatch) => ({
	getGoals: () => dispatch(getGoalsThunk()),
	getUser: () => dispatch(getUser()),
});

export default connect(mapState, mapDispatch)(HomeScreen);
