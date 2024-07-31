import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	StatusBar,
	Image,
} from "react-native"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen"

// constants
import { COLORS, SIZES } from "@/src/constants"
import { AntDesign, Feather } from "@expo/vector-icons"

const Profile = () => {
	return (
		<>
			<StatusBar
				barStyle="light-content"
				backgroundColor={COLORS.black}
			/>
			<ScrollView style={styles.container}>
				<View>
					<Text>User Profile</Text>

					<View>
						<Image
							source={require("../../assets/avatar.jpg")}
							style={{
								width: 150,
								height: 150,
								borderRadius: 999,
							}}
							resizeMode="cover"
						/>

						<View>
							<Text>Mohammed</Text>
							<Text>123-456-789</Text>
						</View>

						<View>
							<View>
								<AntDesign
									name="lock"
									size={24}
									color="black"
								/>
								<Text>Privacy</Text>
								<Feather
									name="chevron-right"
									size={24}
									color="black"
								/>
							</View>
							<View>
								<AntDesign
									name="lock"
									size={24}
									color="black"
								/>
								<Text>Privacy</Text>
								<Feather
									name="chevron-right"
									size={24}
									color="black"
								/>
							</View>
							<View>
								<AntDesign
									name="lock"
									size={24}
									color="black"
								/>
								<Text>Privacy</Text>
								<Feather
									name="chevron-right"
									size={24}
									color="black"
								/>
							</View>
						</View>

						<View />

						<View>
							<Text>Help</Text>
							<Text>Logout</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		backgroundColor: COLORS.tertiary,
		marginTop: Number(StatusBar.currentHeight) + 18,
		paddingHorizontal: SIZES.large,
	},
})
