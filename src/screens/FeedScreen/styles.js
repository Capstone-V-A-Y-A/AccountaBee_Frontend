import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');
const width = Dimensions.get('window').width;

export default StyleSheet.create({
	container: {
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
	row: {
		flexDirection: 'row'
	},
	testClaps: {
		marginLeft: 100
	},
	textInput: {
		backgroundColor: 'white',
		width: '80%',
		padding: 5,
		height: 55,
		borderRadius: 5,
		borderColor: 'white',
		borderWidth: 1,
		fontSize: 18,
		marginRight: 0
	},
	button: {
		paddingVertical: 16,
		paddingHorizontal: 10,
		marginTop: 0,
		marginLeft: 0,
		backgroundColor: '#9FC78A'
	},
	centeredView: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	modalView: {
		flex: 1,
		width: '100%',
		maxHeight: height * 0.6,
		backgroundColor: '#8688BC',
		opacity: 0.9,
		borderTopStartRadius: 20,
		borderTopEndRadius: 20,
		paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
		shadowColor: '#000',
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 0
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginTop: 25,
		marginBottom: 5,
		textAlign: 'center',
		color: 'white',
		fontSize: 20
	},
	modalInnerTextContainer: {
		borderRadius: 5,
		padding: 8,
		marginVertical: 8,
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'space-between'
	},
	modalInnerText: {
		marginBottom: 12,
		textAlign: 'left',
		color: 'white',
		fontSize: 20,
		marginTop: 10,
		flexDirection: 'row'
	},
	xbutton: {
		marginTop: 20
	},
	clapButton: {
		position: 'absolute',
		height: 35,
		width: 35,
		borderRadius: 30,
		backgroundColor: '#ecf0f1',
		top: 4,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 3
	},
	clapBubble: {
		height: 35,
		width: 35,
		borderRadius: 30,
		top: 4,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	clapBubbleGreen: {
		backgroundColor: '#bddbad',
		right: 90
	},
	clapBubbleOrange: {
		backgroundColor: '#FBB374',
		right: 90
	},
	clapImage: {
		width: 25,
		height: 25,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center'
	},
	clapNumber: {
		fontSize: 12,
		marginTop: 13,
		marginLeft: 43
	},
	clapText: {
		color: 'white',
		fontSize: 14
	},
	viewAllComments: {
		marginTop: 10,
		marginBottom: 10,
		fontSize: 12
	},
	feedItem: {
		minHeight: 150,
		backgroundColor: '#FFF',
		borderRadius: 5,
		padding: 8,
		flexDirection: 'row',
		marginVertical: 8,
		marginLeft: 10,
		marginRight: 10
	},
	feedContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	userName: {
		fontSize: 15,
		fontWeight: '500',
		color: '#454D65'
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 16
	},
	post: {
		marginTop: 10,
		marginBottom: '1%',
		fontSize: 0.039 * width,
		color: '#838899',
		maxWidth: '95%'
	}
});
