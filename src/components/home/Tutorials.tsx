import { View, FlatList } from "react-native"
// types
import type { TutorialType } from "@/src/types"
// components
import HighlightCard from "../cards/HighlightCard"
import TitleText from "../common/TitleText"
import { SIZES } from "@/src/constants"

type TutorialsProps = {
	tutorials: TutorialType[]
}

const Tutorials = ({ tutorials }: TutorialsProps) => {
	return (
		<>
			<TitleText
				title="Free Tutorials"
				style={{ marginHorizontal: SIZES.large }}
			/>

			<FlatList
				data={tutorials}
				horizontal
				keyExtractor={(item) => item.id.toString()}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }) => (
					<View
						style={{
							marginHorizontal: 10,
							paddingVertical: 10,
						}}
					>
						<HighlightCard item={item} index={index} />
					</View>
				)}
			/>
		</>
	)
}

export default Tutorials
