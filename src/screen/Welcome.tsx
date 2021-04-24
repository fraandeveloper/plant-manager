import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import wateringImage from '../assets/watering.svg';
import colors from '../styles/colors';

export function Welcome() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Gerencie {'\n'}
				suas plantas de {'\n'} forma fácil
			</Text>

			<Image source={wateringImage} style={styles.image} />

			<Text style={styles.subtitle}>
				Não esqueça mais de regar suas {'\n'} plantas.
				Nós cuidamos de lembrar você {'\n'} sempre que precisar.
			</Text>

			<TouchableOpacity activeOpacity={0.5} style={styles.button}>
				<Text style={styles.buttonText}>
					&#x3e;
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		lineHeight: 38,
		textAlign: 'center',
		marginTop: 30,
		color: colors.heading
	},
	subtitle: {
		fontSize: 17,
		fontWeight: 'normal',
		lineHeight: 25,
		textAlign: 'center',
		paddingHorizontal: 20,
		color: colors.body,
	},
	image: {
		width: '100%',
		height: '100%',
		maxWidth: 292,
		maxHeight: 284,
	},
	button: {
		backgroundColor: colors.green,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
		marginBottom: 10,
		width: 56,
		height: 56,
	},
	buttonText: {
		color: colors.white,
		fontSize: 24,
	}
});