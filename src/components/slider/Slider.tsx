import type { SliderType } from "@/src/types"
import { View, FlatList, StyleSheet } from "react-native"

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
			showsHorizontalScrollIndicator={false}
			renderItem={({ item, index }) => (
				<View>
					<Slide slide={item} index={index} />
				</View>
			)}
		/>
	)
}

export default Slider

const styles = StyleSheet.create({})
