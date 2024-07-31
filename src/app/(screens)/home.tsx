import { useState } from "react"
import {
	Text,
	StyleSheet,
	FlatList,
	StatusBar,
	RefreshControl,
	View,
} from "react-native"

// components
import {
	Header,
	Hero,
	SearchBox,
	HomeSlider,
	Tutorials,
} from "@/src/components"

// custom hooks
import { useFetch } from "@/src/hooks/useFetch"

// constants
import { COLORS } from "@/src/constants"
import { getSliders, getTutorials } from "@/src/lib/apiClient"

// types
import type { SliderType, TutorialType } from "@/src/types"

const home = () => {
	// for refresh control
	const [refreshing, setRefreshing] = useState(false)
	const { data: slides, refetch } = useFetch<SliderType>(getSliders)

	const { data: tutorials, refetch: tutorialRefetch } =
		useFetch<TutorialType>(getTutorials)

	const onRefresh = async () => {
		setRefreshing(true)
		await refetch()
		await tutorialRefetch()
		setRefreshing(false)
	}

	return (
		<>
			<StatusBar
				barStyle="light-content"
				backgroundColor={COLORS.black}
			/>
			<View style={styles.container}>
				<FlatList
					data={[{ id: "1" }]}
					keyExtractor={(item) => item.id.toString()}
					showsVerticalScrollIndicator={false}
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
							<HomeSlider slides={slides} />
							<Tutorials tutorials={tutorials} />
						</>
					}
					renderItem={(item) => <Text>{""}</Text>}
					ListEmptyComponent={<Text>No course found</Text>}
				/>
			</View>
		</>
	)
}

export default home

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.tertiary,
	},
})
