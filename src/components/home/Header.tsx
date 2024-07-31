import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native"
import { useRouter } from "expo-router"
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen"
// contexts
import { useUserContext } from "@/src/contexts/UserContext"
// constants
import { COLORS, SIZES } from "@/src/constants"

const Header = () => {
	const { user } = useUserContext()
	const { name, photo } = user?.user || {}

	const router = useRouter()

	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerLeft}>
				<Text style={styles.titleText}>Welcome Back,</Text>
				<Text>{name}</Text>
			</View>

			<View style={styles.headerRight}>
				{photo ? (
					<TouchableOpacity
						onPress={() => router.push("/(auth)/profile")}
					>
						<Image
							source={{ uri: String(photo) }}
							style={{
								width: wp("10%"),
								height: wp("10%"),
								borderRadius: 10,
							}}
							resizeMode="cover"
						/>
					</TouchableOpacity>
				) : (
					<View
						style={{
							width: 40,
							height: 40,
							borderRadius: 10,
							backgroundColor: COLORS.gray,
						}}
					/>
				)}
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
		marginTop: Number(StatusBar.currentHeight) + 18,
		paddingHorizontal: SIZES.large,
	},
	headerLeft: {
		flex: 1,
	},

	headerRight: {
		flex: 1,
		alignItems: "flex-end",
	},

	titleText: {
		fontSize: hp("3%"),
		fontWeight: "bold",
	},
})
