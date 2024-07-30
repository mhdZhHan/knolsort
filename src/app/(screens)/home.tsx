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
import { Header, Hero, SearchBox } from "@/src/components"

// constants
import { COLORS, SIZES } from "@/src/constants"

const home = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<Hero />
			<SearchBox />
		</SafeAreaView>
	)
}

export default home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		paddingHorizontal: SIZES.large,
		backgroundColor: COLORS.tertiary,
	},
})
