import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	Platform,
	StatusBar,
} from "react-native"
import { useRouter } from "expo-router"

// components
import { CustomButton } from "@/src/components"

// contexts
import { useUserContext } from "@/src/contexts/UserContext"

const home = () => {
	const { updateUserData } = useUserContext()

	const handleLogout = async () => {
		await updateUserData({ type: "LOGOUT" })
	}

	return (
		<SafeAreaView style={styles.container}>
			<CustomButton text="Logout" onPress={handleLogout} />
		</SafeAreaView>
	)
}

export default home

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
})
