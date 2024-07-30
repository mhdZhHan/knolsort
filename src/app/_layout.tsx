import { Stack } from "expo-router"
import { StatusBar } from "react-native"

import { UserContextProvider } from "../contexts/UserContext"

const RootLayout = () => {
	return (
		<UserContextProvider>
			<Stack initialRouteName="(screens)/home">
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

			<StatusBar barStyle={"dark-content"} />
		</UserContextProvider>
	)
}

export default RootLayout
