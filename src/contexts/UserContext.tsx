import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "expo-router"

import type { User } from "@react-native-google-signin/google-signin"

// lin
import {
	clearStorage,
	getStorage,
	setStorage,
} from "../lib/asyncStorageHelpers"
import { signOut } from "../lib/auth"

type UserContextProviderProps = {
	children: React.ReactNode
}

type LoginAction = { type: "LOGIN"; payload: User }

type LogoutAction = { type: "LOGOUT" }

type UpdateUserDataActionType = LoginAction | LogoutAction

type UserContextType = {
	user: User | null
	setUser: React.Dispatch<React.SetStateAction<User | null>>
	updateUserData: (action: UpdateUserDataActionType) => Promise<void>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const router = useRouter()
	const [user, setUser] = useState<User | null>(null)

	const updateUserData = async (action: UpdateUserDataActionType) => {
		switch (action.type) {
			case "LOGOUT":
				await signOut()
				await clearStorage()
				setUser(null)
				router.replace("/(auth)/login")
				break
			case "LOGIN":
				setUser(action?.payload)
				await setStorage<User>("user", action.payload)
				router.replace("/(screens)/home")
				break
			default:
				return
		}
	}

	useEffect(() => {
		getStorage<User>("user")
			.then((data) => {
				if (data) {
					setUser(data)
				} else {
					setUser(null)
				}
			})
			.catch((error) => setUser(null))
	}, [])

	return (
		<UserContext.Provider value={{ user, setUser, updateUserData }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext)
