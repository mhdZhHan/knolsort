import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

const SearchBox = () => {
	return (
		<>
			<View style={styles.searchBoxContainer}>
				<View style={styles.SearchIcon}>
					<Ionicons name="search" size={24} color="gray" />
				</View>
				<View style={styles.searchBox}>
					<Text style={styles.placeholderText}>Search courses</Text>
				</View>
			</View>

			<View style={styles.searchBoxWrapper}></View>
		</>
	)
}

export default SearchBox

const styles = StyleSheet.create({
	searchBoxContainer: {
		marginTop: 35,
		marginLeft: 35,
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
		padding: 10,
	},
	placeholderText: {
		fontSize: SIZES.medium,
		fontWeight: "bold",
		color: COLORS.gray,
	},

	searchBoxWrapper: {
		marginLeft: 40,
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
