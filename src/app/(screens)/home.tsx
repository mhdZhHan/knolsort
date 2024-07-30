import { useState } from "react"
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Platform,
	FlatList,
	StatusBar,
	RefreshControl,
} from "react-native"

// components
import { Header, Hero, SearchBox, Slider } from "@/src/components"

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
	const { data: slides, refetch } = useFetch<SliderType>(getSliders)

	const onRefresh = async () => {
		setRefreshing(true)
		await refetch()
		setRefreshing(false)
	}

	return (
		<>
			<SafeAreaView style={styles.container}>
				<FlatList
					data={[{ id: "1" }]}
					keyExtractor={(item) => item.id.toString()}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
					ListHeaderComponent={
						<>
							<Header />
							<Hero />
							<SearchBox />
							<Slider slides={slides} />
						</>
					}
					renderItem={(item) => <Text>Hello</Text>}
					ListEmptyComponent={<Text>No course found</Text>}
				/>
			</SafeAreaView>

			<StatusBar barStyle="dark-content" backgroundColor={COLORS.black} />
		</>
	)
}

export default home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		marginTop: 10,
		paddingHorizontal: SIZES.large,
		backgroundColor: COLORS.tertiary,
	},
})
