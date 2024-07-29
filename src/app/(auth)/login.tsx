import { useState } from "react"

import { View, Text, SafeAreaView, StyleSheet, Alert } from "react-native"

//types
import type { User } from "@react-native-google-signin/google-signin"

// lib/auth
import { signIn } from "@/src/lib/auth"

import AntDesign from "@expo/vector-icons/AntDesign"

// constants
import { COLORS, SIZES } from "@/src/constants"

// components
import { CustomButton } from "@/src/components"

// contexts
import { useUserContext } from "@/src/contexts/UserContext"
import { setStorage } from "@/src/lib/asyncStorageHelpers"
import { useRouter } from "expo-router"

const Login = () => {
	const router = useRouter()

	const [isLogin, setIsLogin] = useState(false)
	const { setUser } = useUserContext()

	const handleLogin = async () => {
		setIsLogin(true)

		try {
			const userInfo = await signIn()
			setUser(userInfo)
			await setStorage<User>("user", userInfo)

			router.push("/(screens)/home")
		} catch (error) {
			Alert.alert("Login error", (error as Error).message)
		} finally {
			setIsLogin(false)
		}
	}

	return (
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
})
