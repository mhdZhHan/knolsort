import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "@react-native-google-signin/google-signin"
import { getStorage } from "../lib/asyncStorageHelpers"

type UserContextProviderProps = {
	children: React.ReactNode
}

type UserContextType = {
	user: User | null
	setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<User | null>(null)

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
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => useContext(UserContext)
