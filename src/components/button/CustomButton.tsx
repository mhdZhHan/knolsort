import { COLORS, SHADOWS, SIZES } from "@/src/constants"
import {
	TouchableOpacity,
	StyleSheet,
	StyleProp,
	ViewStyle,
	Text,
} from "react-native"

type CustomButtonProps = {
	text: string
	icon?: React.ReactNode
	onPress: () => void
	style?: StyleProp<ViewStyle>
}

const CustomButton: React.FC<CustomButtonProps> = ({
	text,
	icon,
	onPress,
	style,
}) => {
	return (
		<TouchableOpacity
			style={[styles.customButton, style]}
			activeOpacity={0.5}
			onPress={onPress}
		>
			{icon ? icon : ""}

			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	)
}

export default CustomButton

const styles = StyleSheet.create({
	customButton: {
		backgroundColor: COLORS.white,
		borderColor: COLORS.black,
		paddingVertical: SIZES.small,
		paddingHorizontal: SIZES.large,
		borderWidth: 2,
		borderRadius: 5,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: SIZES.medium,

		...SHADOWS.medium,
	},
	buttonText: {
		color: COLORS.black,
		fontSize: SIZES.large, // 18
		fontWeight: "bold",
		textAlign: "center",
	},
})
