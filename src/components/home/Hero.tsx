import { View, Text, StyleSheet } from "react-native"

// constants
import { COLORS, SIZES } from "@/src/constants"
import TitleText from "../common/TitleText"

const Hero = () => {
	return (
		<View style={styles.heroContainer}>
			<TitleText title="Learning Every Day" />

			<Text style={styles.description}>
				Explore coding lessons tailored to your style
			</Text>
		</View>
	)
}

export default Hero

const styles = StyleSheet.create({
	heroContainer: {
		marginTop: 35,
		paddingHorizontal: SIZES.large,
	},
	description: {
		fontWeight: "900",
		color: COLORS.gray,
	},
})
