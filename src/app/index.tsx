import { useEffect } from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"

// constants
import { COLORS, SHADOWS, SIZES } from "../constants"

// contexts
import { useUserContext } from "../contexts/UserContext"

export default function Splash() {
	const router = useRouter()

	const { user } = useUserContext()

	useEffect(() => {
		const timer = setTimeout(() => {
			if (user?.idToken) {
				router.replace("/(screens)/home")
			} else {
				router.replace("/(auth)/login")
			}
		}, 2000)

		return () => clearTimeout(timer)
	}, [user, router])

	return (
		<>
			<StatusBar hidden />
			<View style={styles.container}>
				<View style={styles.titleBox}>
					<Text style={styles.titleBoxText}>Welcome to Knolsort</Text>
					<Text style={styles.titleBoxSubtitle}>
						The Game of logic
					</Text>
				</View>

				<Text style={styles.subtitle}>
					Step-by-step Programming Learning
				</Text>

				<View style={styles.codeContainer}>
					<Text style={styles.codeText}>{"if (learning) {"}</Text>
					<Text style={styles.codeText}>{"  knowledge++"}</Text>
					<Text style={styles.codeText}>{"}"}</Text>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.tertiary,
	},
	titleBox: {
		backgroundColor: COLORS.white,

		paddingVertical: SIZES.large,
		paddingHorizontal: 40,
		transform: [{ skewY: "5deg" }],
		marginBottom: SIZES.large,

		borderWidth: 6,
		borderColor: COLORS.black,
		borderRadius: SIZES.small,
		zIndex: 2,

		...SHADOWS.medium,
	},
	titleBoxText: {
		fontSize: SIZES.xLarge,
		fontWeight: "bold",
		color: COLORS.black,
		textAlign: "center",
		textShadowColor: "#999",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	titleBoxSubtitle: {
		fontSize: 16,
		color: COLORS.black,
		textAlign: "center",
		textShadowColor: "#999",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
		marginTop: 5,
	},
	subtitle: {
		fontSize: 18,
		marginTop: SIZES.large,
		color: "#333",
		textAlign: "center",
		marginBottom: SIZES.xLarge,
	},
	codeContainer: {
		width: wp(80),
		borderWidth: 2,
		borderColor: "#333",
		borderStyle: "dashed",
		padding: SIZES.large,
		borderRadius: SIZES.small,
	},
	codeText: {
		fontFamily: "Courier",
		fontSize: 16,
	},
})
