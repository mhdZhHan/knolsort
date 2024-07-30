import { useState } from "react"
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

// custom hooks
import { useFetch } from "@/src/hooks/useFetch"

// constants
import { COLORS, SIZES } from "@/src/constants"
import { getSliders } from "@/src/lib/apiClient"

// types
import type { SliderType } from "@/src/types"

const home = () => {
	// for refresh control
	const [refreshing, setRefreshing] = useState(false)

	const { data, isLoading, refetch } = useFetch<SliderType>(getSliders)

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
