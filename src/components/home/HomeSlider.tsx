import type { SliderType } from "@/src/types"
import { FlatList } from "react-native"

import RectCard from "../cards/RectCard"

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
				<RectCard slide={item} index={index} />
			)}
		/>
	)
}

export default Slider
