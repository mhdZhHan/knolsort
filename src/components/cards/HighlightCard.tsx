import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
import Feather from "@expo/vector-icons/Feather"

// types
import type { TutorialType } from "@/src/types"

// constants
import { COLORS, SIZES } from "@/src/constants"

type HighlightCardProps = {
	index: number
	item: TutorialType
}

const HighlightCard = ({ index, item }: HighlightCardProps) => {
	const skewYValue = index % 2 === 0 ? "1deg" : "-1deg"
	const transformStyle = { transform: [{ skewY: skewYValue }] }

	return (
		<TouchableOpacity activeOpacity={0.9}>
			<View style={[styles.cardContainer, transformStyle]}>
				<Image
					source={require("../../assets/astro-firebase.jpg")}
					alt="course-image"
					resizeMode="cover"
					style={{
						width: "100%",
						height: wp(30),
						borderRadius: 10,
					}}
				/>
				<View style={styles.cardInfo}>
					<Text
						style={{
							fontWeight: "bold",
							color: COLORS.gray,
						}}
					>
						20 Lessons
					</Text>
					<Feather name="play-circle" size={20} color="black" />
				</View>

				<Text style={styles.cardTitle}>
					Astro Firebase authentication
				</Text>
			</View>

			<View style={[transformStyle, styles.slideCardWrapper]}></View>
		</TouchableOpacity>
	)
}

export default HighlightCard

const styles = StyleSheet.create({
	cardContainer: {
		width: wp(48),
		padding: 10,
		zIndex: 2,

		borderWidth: 1,
		borderColor: COLORS.black,
		borderRadius: 10,
		backgroundColor: COLORS.tertiary,
	},
	cardInfo: {
		paddingVertical: 14,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	cardTitle: {
		fontSize: SIZES.medium,
		fontWeight: "600",
	},
	slideCardWrapper: {
		width: wp(46),
		padding: 12,
		marginLeft: 6,

		borderWidth: 1.5,
		borderRadius: 10,
		borderColor: COLORS.black,

		position: "relative",
		bottom: 18,
	},
})
