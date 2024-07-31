import { useState } from "react"
import {
	SafeAreaView,
	Text,
	StyleSheet,
	Platform,
	FlatList,
	StatusBar,
	RefreshControl,
	View,
} from "react-native"

// components
import { CourseCard, Header, Hero, SearchBox, Slider } from "@/src/components"

// custom hooks
import { useFetch } from "@/src/hooks/useFetch"

// constants
import { COLORS, SIZES } from "@/src/constants"
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
			<SafeAreaView style={styles.container}>
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
							<Slider slides={slides} />

							<View
								style={{
									marginTop: 10,
								}}
							>
								<Text
									style={{
										fontSize: SIZES.large,
										fontWeight: "bold",
										marginBottom: 20,
										marginHorizontal: SIZES.large,
									}}
								>
									Video Tutorials
								</Text>

								<FlatList
									data={tutorials}
									horizontal
									keyExtractor={(item) => item.id.toString()}
									showsHorizontalScrollIndicator={false}
									renderItem={({ item, index }) => (
										<View
											style={{
												marginHorizontal: 10,
												paddingVertical: 20,
											}}
										>
											<CourseCard index={index} />
										</View>
									)}
								/>
							</View>
						</>
					}
					renderItem={(item) => <Text>{""}</Text>}
					ListEmptyComponent={<Text>No course found</Text>}
				/>
			</SafeAreaView>
		</>
	)
}

export default home

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		marginTop: 10,
		backgroundColor: COLORS.tertiary,
	},
})
