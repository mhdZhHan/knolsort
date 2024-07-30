import axios from "axios"

// axios instance with base URL
const apiClient = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		"x-api-key": process.env.EXPO_PUBLIC_STRAPI_API_TOKEN,
	},
})

// setting api
// export const setApiKey = (apiKey: string) => {
// 	if (apiKey) {
// 		apiClient.defaults.headers.common["x-api-key"] = apiKey
// 	} else {
// 		delete apiClient.defaults.headers.common["x-api-key"]
// 	}
// }

// API call: Get Sliders
export const getSliders = async () => {
	try {
		const response = await apiClient.get("/sliders/1?populate=*")
		return response.data
	} catch (error) {
		console.error("Error fetching user data:", error)
		throw error
	}
}
