import { View, Text, Image, StyleSheet } from "react-native"

import { useUserContext } from "@/src/contexts/UserContext"
import { SIZES } from "@/src/constants"

const Header = () => {
	const { user } = useUserContext()
	const { name, photo } = user?.user || {}

	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerLeft}>
				<Text style={styles.titleText}>Hello,</Text>
				<Text>{user?.user.name}</Text>
			</View>

			<View style={styles.headerRight}>
				<Image
					source={{ uri: String(photo) }}
					style={{
						width: 40,
						height: 40,
						borderRadius: 10,
					}}
				/>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 16,
	},
	headerLeft: {
		flex: 1,
	},

	headerRight: {
		flex: 1,
		alignItems: "flex-end",
	},

	titleText: {
		fontSize: SIZES.large,
		fontWeight: "bold",
	},
})
