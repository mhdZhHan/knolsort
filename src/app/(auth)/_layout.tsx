import { StatusBar } from "react-native"
import { Stack } from "expo-router"

const AuthLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen name="login" options={{ headerShown: false }} />
			</Stack>

			<StatusBar barStyle="dark-content" animated />
		</>
	)
}

export default AuthLayout
