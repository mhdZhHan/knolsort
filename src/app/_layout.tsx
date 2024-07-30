import { Stack } from "expo-router"
import { StatusBar } from "react-native"

import { UserContextProvider } from "../contexts/UserContext"
import { COLORS } from "../constants"

const RootLayout = () => {
	return (
		<UserContextProvider>
			<Stack
				screenOptions={{ headerShown: false }}
				initialRouteName="/(screens)/home"
			/>
		</UserContextProvider>
	)
}

export default RootLayout
