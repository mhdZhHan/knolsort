import { GoogleSignin } from "@react-native-google-signin/google-signin"

GoogleSignin.configure({
	iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
	webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
})

export const signIn = async () => {
	try {
		await GoogleSignin.hasPlayServices()

		const userInfo = await GoogleSignin.signIn()
		return userInfo
	} catch (error) {
		throw new Error(error as string)
	}
}

export const signOut = async () => {
	GoogleSignin.revokeAccess()
	GoogleSignin.signOut()
}
