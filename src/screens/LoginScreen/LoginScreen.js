import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
import CustomButton from "../CustomButton";
import { firebase } from "../../firebase/config";

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onFooterLinkPress = () => {
		navigation.navigate("Registration");
	};

	const onLoginPress = () => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(response => {
				//setUser(response.user);
				return response.user;
			});
	};

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: "100%" }}
				keyboardShouldPersistTaps="always">
				<Text style={styles.header}>ACCOUNTABEE</Text>
				<TextInput
					style={styles.input}
					placeholder="E-mail"
					placeholderTextColor="#aaaaaa"
					onChangeText={text => setEmail(text)}
					value={email}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor="#aaaaaa"
					secureTextEntry
					placeholder="Password"
					onChangeText={text => setPassword(text)}
					value={password}
					underlineColorAndroid="transparent"
					autoCapitalize="none"
				/>
				<CustomButton title="LOG IN" style={styles.button} onPress={() => onLoginPress} />
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Don't have an account?{" "}
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Sign up
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
}
