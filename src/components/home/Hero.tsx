import { COLORS, SIZES } from "@/src/constants"
import { View, Text, StyleSheet } from "react-native"

const Hero = () => {
	return (
		<View style={styles.heroContainer}>
			<Text style={styles.title}>Learning Every Day</Text>
			<Text style={styles.description}>
				Explore coding lessons tailored to your style
			</Text>
		</View>
	)
}

export default Hero

const styles = StyleSheet.create({
	heroContainer: {
		marginTop: 30,
	},
	title: {
		fontSize: SIZES.xLarge,
		fontWeight: "900",
		marginBottom: 15,
	},
	description: {
		fontSize: SIZES.medium,
		fontWeight: "900",
		color: COLORS.gray,
	},
})
