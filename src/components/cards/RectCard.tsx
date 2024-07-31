import {
	View,
	Image,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native"

// types
import type { SliderType } from "@/src/types"

// constants
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

type RectCardProps = {
	slide: SliderType
	index: number
}

const RectCard = ({ slide, index }: RectCardProps) => {
	const skewYValue = index % 2 === 0 ? "-3deg" : "3deg"
	const transformStyle = { transform: [{ skewY: skewYValue }] }

	return (
		<View style={{ marginHorizontal: 10 }}>
			<TouchableOpacity
				activeOpacity={0.9}
				style={[styles.slideCard, transformStyle]}
			>
				<Image
					source={{ uri: slide.image }}
					style={{
						width: 55,
						height: 55,
						borderRadius: 10,
					}}
					resizeMode="cover"
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
			</TouchableOpacity>

			<View style={[transformStyle, styles.slideCardWrapper]}></View>
		</View>
	)
}

export default RectCard

const styles = StyleSheet.create({
	slideCard: {
		width: Dimensions.get("screen").width * 0.8,
		padding: 12,
		marginBottom: 30,
		marginTop: 25,
		zIndex: 5,

		borderWidth: 1.5,
		borderRadius: 10,
		borderColor: COLORS.black,

		backgroundColor: COLORS.white,
		...SHADOWS.small,

		flexDirection: "row",
		alignItems: "center",
		gap: 20,
	},

	slideCardWrapper: {
		width: Dimensions.get("screen").width * 0.6,
		padding: 12,
		marginLeft: 25,

		borderWidth: 1.5,
		borderTopWidth: 0,
		borderRadius: 10,
		borderColor: COLORS.black,

		position: "relative",
		bottom: 48,
	},
})
