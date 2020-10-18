import React from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { getSentRequests } from "../../../redux/reducers/sentRequests";
import { getRequests } from "../../../redux/reducers/requests";
import { getFriends } from "../../../redux/reducers/friends";
import { firebase } from "../../firebase/config";
import instance from "../../../redux/axios";

//TODO - add loading icon because it takes a second to load requests
//TODO - make confirm/deny buttons nice icons
//TODO - better error handling messages on backend
//TODO - let user's uploas photo???

class FriendsScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		};
	}

	async componentDidMount() {
		const token = await firebase.auth().currentUser.getIdToken();
		this.props.getSentRequests(token);
		this.props.getRequests(token);
		this.props.getFriends(token);
	}

	handleChange = email => {
		this.setState({ email });
	};

	onRequestPress = async () => {
		const email = this.state.email;
		try {
			const token = await firebase.auth().currentUser.getIdToken();
			const res = await instance.post("/friends/request", { token, email });
			this.props.getSentRequests(token);
		} catch (error) {
			alert(error);
		}
	};

	onReplyPress = async (status, senderId) => {
		//need friend id
		console.log(status, senderId);
		try {
			const token = await firebase.auth().currentUser.getIdToken();
			const res = await instance.put("/friends/reply", { token, senderId, status });
			console.log(res.data);
			this.props.getRequests(token);
		} catch (error) {
			alert(error);
		}
	};

	render() {
		const { navigation } = this.props;
		const { sentRequests } = this.props || [];
		const { requests } = this.props || [];
		const { friends } = this.props || [];
		console.log(this.props.friends);
		return (
			<View style={styles.container}>
				<Text style={styles.header}>My Friends</Text>
				<Text>Add a Friend! Search your friend's email to add them</Text>
				<TextInput
					onChangeText={email => this.handleChange(email)}
					style={styles.input}
					placeholder="email"
					placeholderTextColor="#aaaaaa"
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<Button title="Send Friend Request" onPress={() => this.onRequestPress()} />
				<Button title="Return to Settings" onPress={() => navigation.navigate("Settings")} />
				<>
					<Text>My Friends</Text>
					{friends.map(friend => (
						<View key={friend.uid}>
							<Text>{friend.firstName}</Text>
						</View>
					))}
				</>
				<>
					<Text>Friend Requests</Text>
					{requests.map(request => (
						<View key={request.uid}>
							<Text>
								{request.firstName} {request.email}
							</Text>
							<Button title="YES" onPress={() => this.onReplyPress("confirmed", request.uid)} />
							<Button title="NO" onPress={() => this.onReplyPress("denied", request.uid)} />
						</View>
					))}
				</>

				<>
					<Text>Sent Requests</Text>
					{sentRequests.map(request => (
						<View key={request.uid}>
							<Text>
								{request.firstName} {request.email}
							</Text>
							<Button title="Delete Request" />
						</View>
					))}
				</>
			</View>
		);
	}
}

const mapState = state => ({
	sentRequests: state.sentRequests,
	requests: state.requests,
	friends: state.friends
});

const mapDispatch = dispatch => ({
	getSentRequests: token => dispatch(getSentRequests(token)),
	getRequests: token => dispatch(getRequests(token)),
	getFriends: token => dispatch(getFriends(token))
});

export default connect(mapState, mapDispatch)(FriendsScreen);
