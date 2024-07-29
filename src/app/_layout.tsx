import { Stack } from "expo-router"
import { StatusBar } from "react-native"

import { UserContextProvider } from "../contexts/UserContext"

const RootLayout = () => {
	return (
		<UserContextProvider>
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
		</UserContextProvider>
	)
}

export default RootLayout
