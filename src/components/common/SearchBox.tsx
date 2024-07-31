import { View, Text, StyleSheet, TextInput } from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { Ionicons } from "@expo/vector-icons"

// constnats
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

const SearchBox = () => {
	return (
		<>
			<View style={styles.searchBoxContainer}>
				<View style={styles.SearchIcon}>
					<Ionicons name="search" size={24} color={COLORS.gray} />
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
		marginLeft: "18%",
		marginRight: SIZES.large,
		height: 46,
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
		paddingHorizontal: 12,
	},
	searchBox: {
		flex: 1,
		height: "100%",
		padding: 4,
		fontSize: hp("2.3%"),
		fontWeight: "bold",
	},

	searchBoxWrapper: {
		marginLeft: "21%",
		marginRight: SIZES.large,
		height: 20,

		borderColor: COLORS.black,
		borderWidth: 1,
		borderTopLeftRadius: 1,
		borderBottomLeftRadius: 100,
		backgroundColor: COLORS.tertiary,

		position: "relative",
		bottom: 8,
	},
})
