import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native"

// types
import type { SliderType } from "@/src/types"

// constants
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

type SlideProps = {
	slide: SliderType
	index: number
}

const Slide = ({ slide, index }: SlideProps) => {
	const skewYValue = index % 2 === 0 ? "-3deg" : "3deg"
	const transformStyle = { transform: [{ skewY: skewYValue }] }

	return (
		<TouchableOpacity activeOpacity={0.9}>
			<View style={[styles.slideCard, transformStyle]}>
				<Image
					source={{ uri: slide.image }}
					style={{
						width: 55,
						height: 55,
						borderRadius: 10,
					}}
				/>

				<View>
					<Text
						style={{
							fontSize: SIZES.medium,
							color: COLORS.black,
							fontWeight: "500",
						}}
					>
						{slide.name}
					</Text>
					<Text
						style={{
							color: COLORS.gray,
						}}
					>
						20 Lessons
					</Text>
				</View>
			</View>

			<View style={[transformStyle, styles.slideCardWrapper]}></View>
		</TouchableOpacity>
	)
}

export default Slide

const styles = StyleSheet.create({
	slideCard: {
		width: Dimensions.get("screen").width * 0.8,
		padding: 12,
		zIndex: 2,

		borderWidth: 1.5,
		borderRadius: 10,
		borderColor: COLORS.black,

		backgroundColor: COLORS.tertiary,
		...SHADOWS.small,

		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},

	slideCardWrapper: {
		width: Dimensions.get("screen").width * 0.6,
		padding: 12,
		marginRight: 30,
		marginLeft: 25,

		borderWidth: 1.5,
		borderRadius: 10,
		borderColor: COLORS.black,

		position: "relative",
		bottom: 48,
	},
})
