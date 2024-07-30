import axios from "axios"

// axios instance with base URL
const apiClient = axios.create({
	baseURL: "http://192.168.1.75:1337/api",
	headers: {
		"Content-Type": "application/json",
		"x-api-key":
			"60165c14a40cff8ca76e2dc44b080af2c79cf3707a04133b288023e3d5912e9bade177472ad13b6a3af1e83e522620d52e5863e1193bc2bb6b0decdbdae48b88d96acc0f76cb6e626ff798724737fe9fe6aa3717d5e826bdd170e3cdb52f16d9641d9bc804686136a3986af45e44846618d10df50deac19dfef05cdd0680d104",
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
