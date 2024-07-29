import { Stack } from "expo-router"
import { StatusBar } from "react-native"

const RootLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen
					name="(auth)/login"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="(screens)/home"
					options={{ headerShown: false }}
				/>
			</Stack>

			<StatusBar barStyle="dark-content" animated />
		</>
	)
}

export default RootLayout
