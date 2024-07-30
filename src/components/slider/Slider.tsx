import type { SliderType } from "@/src/types"
import { View, FlatList, StyleSheet, Dimensions } from "react-native"

import Slide from "./Slide"

type SliderProps = {
	slides: SliderType[]
}

const Slider = ({ slides }: SliderProps) => {
	return (
		<FlatList
			data={slides}
			keyExtractor={(slide) => slide.id.toString()}
			horizontal
			renderItem={({ item, index }) => (
				<View style={styles.sliderContainer}>
					<Slide slide={item} index={index} />
				</View>
			)}
		/>
	)
}

export default Slider

const styles = StyleSheet.create({
	sliderContainer: {
		width: Dimensions.get("screen").width * 0.7, // Adjust the width if needed
		padding: 10, // Adjust padding if needed
	},
})
