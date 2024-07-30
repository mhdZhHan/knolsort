import { Stack } from "expo-router"

import { UserContextProvider } from "../contexts/UserContext"

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
