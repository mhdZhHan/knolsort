import { Text, StyleSheet, StyleProp, TextStyle } from "react-native"

import { heightPercentageToDP as hp } from "react-native-responsive-screen"

type TitleTextProps = {
	title: string
	style?: StyleProp<TextStyle>
}

const TitleText = ({ title, style }: TitleTextProps) => {
	return <Text style={[styles.title, style]}>{title}</Text>
}

export default TitleText

const styles = StyleSheet.create({
	title: {
		fontSize: hp("2.8%"), // SIZES.large
		fontWeight: "bold",
		marginBottom: 10,
	},
})
