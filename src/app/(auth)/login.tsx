import { useState } from "react"

import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
	TouchableOpacity,
	Alert,
} from "react-native"

// types
import type { User } from "@react-native-google-signin/google-signin"

// lib/auth
import { signIn } from "@/src/lib/auth"

import AntDesign from "@expo/vector-icons/AntDesign"

// constants
import { COLORS, SHADOWS, SIZES } from "@/src/constants"

const Login = () => {
	const [error, setError] = useState("")
	const [isLogin, setIsLogin] = useState(false)
	const [user, setUser] = useState<User | null>(null)

	const handleLogin = async () => {
		setIsLogin(true)

		try {
			const userInfo = await signIn()
			setUser(userInfo)
		} catch (error) {
			Alert.alert("Login error", (error as Error).message)
		} finally {
			setIsLogin(false)
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Welcome to EduApp</Text>
			<Text style={styles.subtitle}>Your gateway to knowledge</Text>

			<View style={styles.infoContainer}>
				<Text style={styles.infoText}>
					Learn, explore, and grow with our extensive library of
					educational resources.
				</Text>
			</View>

			<TouchableOpacity
				style={styles.googleButton}
				activeOpacity={0.5}
				onPress={handleLogin}
			>
				<AntDesign
					name="google"
					size={SIZES.xLarge}
					color={COLORS.black}
				/>
				<Text style={styles.googleButtonText}>Login with Google</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.tertiary,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: SIZES.xxLarge,
		fontWeight: "bold",
		marginBottom: SIZES.large,
		color: COLORS.black,

		textAlign: "center",
		textShadowColor: "#999",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	subtitle: {
		fontSize: 18,
		marginBottom: SIZES.xxLarge,
		color: "#333",
		textAlign: "center",
	},
	infoContainer: {
		marginBottom: SIZES.xxLarge,
		paddingHorizontal: SIZES.large,
	},
	infoText: {
		fontSize: SIZES.medium,
		color: "#555",
		textAlign: "center",
		fontStyle: "italic",
	},
	googleButton: {
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
	googleButtonText: {
		color: COLORS.black,
		fontSize: SIZES.large, // 18
		fontWeight: "bold",
		textAlign: "center",
	},
})
