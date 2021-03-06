import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

export default StyleSheet.create({
	headlineContainer: {
		paddingTop: '18%',
		paddingLeft: 20,
		paddingRight: 20,
		backgroundColor: '#8688BC'
	},
	headline: {
		marginTop: 10,
		color: 'white',
		fontSize: 26,
		textAlign: 'center',
		marginBottom: 20,
		fontWeight: '500'
	},
	subheading: {
		fontWeight: '700',
		fontSize: 20,
		padding: 15,
		color: '#424347'
	},
	outerContainer: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#FFF',
		marginHorizontal: '5%',
		marginVertical: '2%',
		maxWidth: '95%',
		justifyContent: 'space-between'
	},
	leftRequestContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		borderRadius: 5,
		marginVertical: '2%',
		marginLeft: 15,
		backgroundColor: '#FFF'
	},
	rightRequestContainer: {
		display: 'flex',
		alignSelf: 'center',
		borderRadius: 5
	},
	photo: {
		height: 60,
		width: 60,
		borderRadius: 30,
		marginRight: '7%',
		alignSelf: 'center',
		justifyContent: 'center'
	},
	icon: {
		color: '#9FC78A',
		paddingLeft: '2%',
		marginRight: '2%'
	},
	iconNo: {
		color: 'black',
		paddingLeft: '2%',
		marginRight: '2%'
	},
	iconContainer: {
		flexDirection: 'row'
	},
	requestBottom: {
		display: 'flex',
		flexDirection: 'row'
	},
	name: {
		fontSize: 0.045 * width,
		fontWeight: '700',
		alignSelf: 'center',
		textAlignVertical: 'center',
		color: '#424347'
	},
	email: {
		fontSize: 20,
		padding: 10,
		color: '#424347'
	},
	instructions: {
		alignSelf: 'center',
		margin: 15,
		maxWidth: '90%',
		fontSize: 0.045 * width,
		textAlign: 'center',
		padding: 10,
		color: '#424347'
	},
	input: {
		height: 48,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: 'white',
		fontSize: 20,
		marginHorizontal: 15,
		paddingLeft: 10
	},
	sendButton: {
		fontWeight: 'bold',
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		fontFamily: 'Avenir'
	},
	buttonContainer: {
		width: '40%',
		alignSelf: 'center',
		marginHorizontal: 15,
		marginTop: '4%',
		backgroundColor: '#9FC78A',
		paddingVertical: 12,
		borderRadius: 10
	}
});
