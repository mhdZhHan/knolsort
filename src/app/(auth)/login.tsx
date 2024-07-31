import { useState } from "react"

import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Alert,
	StatusBar,
} from "react-native"

// lib/auth
import { signIn } from "@/src/lib/auth"

import AntDesign from "@expo/vector-icons/AntDesign"

// constants
import { COLORS, SIZES } from "@/src/constants"

// components
import { CustomButton } from "@/src/components"

// contexts
import { useUserContext } from "@/src/contexts/UserContext"

const Login = () => {
	const [isLogin, setIsLogin] = useState(false)
	const { updateUserData } = useUserContext()

	const handleLogin = async () => {
		setIsLogin(true)

		try {
			const userInfo = await signIn()
			await updateUserData({ type: "LOGIN", payload: userInfo })
		} catch (error) {
			Alert.alert("Login error", (error as Error).message)
		} finally {
			setIsLogin(false)
		}
	}

	return (
		<>
			<StatusBar hidden />
			<SafeAreaView style={styles.container}>
				<Text style={styles.title}>Welcome to Knolsort</Text>
				<Text style={styles.subtitle}>Your gateway to knowledge</Text>

				<View style={styles.infoContainer}>
					<Text style={styles.infoText}>
						Learn, explore, and grow with our extensive library of
						educational resources.
					</Text>
				</View>

				<CustomButton
					onPress={handleLogin}
					text="Login with Google"
					style={{ position: "absolute", bottom: 100 }}
					iconLeft={
						<AntDesign
							name="google"
							size={SIZES.xLarge}
							color={COLORS.black}
						/>
					}
				/>
			</SafeAreaView>
		</>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.tertiary,

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
		fontSize: SIZES.medium,
		marginBottom: SIZES.xxLarge,
		color: COLORS.gray,
		textAlign: "center",
	},
	infoContainer: {
		marginBottom: SIZES.xxLarge,
		paddingHorizontal: SIZES.large,
	},
	infoText: {
		fontSize: 16,
		color: COLORS.gray,
		textAlign: "center",
	},
})
