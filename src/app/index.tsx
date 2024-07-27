import { View, Text, Button } from "react-native"
import React from "react"
import { router } from "expo-router"

const App = () => {
	return (
		<View
			style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
		>
			<Text>App</Text>
			<Button title="Login" onPress={() => router.push("/login")} />
		</View>
	)
}

export default App
