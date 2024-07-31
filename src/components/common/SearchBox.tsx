import { View, Text, StyleSheet, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

const SearchBox = () => {
	return (
		<>
			<View style={styles.searchBoxContainer}>
				<View style={styles.SearchIcon}>
					<Ionicons name="search" size={24} color="gray" />
				</View>
				<TextInput
					style={styles.searchBox}
					placeholder="Search courses"
					placeholderTextColor={COLORS.gray}
				/>
			</View>

			<View style={styles.searchBoxWrapper}></View>
		</>
	)
}

export default SearchBox

const styles = StyleSheet.create({
	searchBoxContainer: {
		marginTop: 35,
		marginLeft: 60,
		height: 50,
		zIndex: 2,

		flexDirection: "row",
		alignItems: "center",

		borderColor: COLORS.black,
		borderWidth: 1,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		backgroundColor: COLORS.tertiary,

		...SHADOWS.small,
	},
	SearchIcon: {
		height: "100%",
		borderRightWidth: 1,
		borderColor: COLORS.black,

		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	searchBox: {
		flex: 1,
		padding: 10,
		fontSize: SIZES.medium,
		fontWeight: "bold",
	},

	searchBoxWrapper: {
		marginLeft: 60,
		height: 45,

		borderColor: COLORS.black,
		borderWidth: 1,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		backgroundColor: COLORS.tertiary,

		position: "relative",
		bottom: 35,
	},
})
