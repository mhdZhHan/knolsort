import axios from "axios"

import type { SliderType, TutorialType } from "../types"

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
export const getSliders = async (): Promise<SliderType[]> => {
	try {
		const response = await apiClient.get("/sliders?populate=*")

		const data = response.data.data.map((item: any) => {
			return {
				id: item.id,
				name: item.attributes.name,
				image: item.attributes.image.data.attributes.url,
			}
		})

		return data
	} catch (error) {
		console.error("Error fetching slider data:", error)
		throw error
	}
}

// API call: Get Tutorials
export const getTutorials = async (): Promise<TutorialType[]> => {
	try {
		const response = await apiClient.get("/tutorials?populate=*")

		const data = response.data.data.map((item: any) => {
			return {
				id: item.id,
				title: item.attributes.title,
				description: item.attributes.description,
				video: item.attributes.video,
				image: item.attributes.image.data.attributes.url,
				tutorialTopics: item.attributes.video.TutorialTopic
			}
		})

		return data
	} catch (error) {
		console.error("Error fetching slider data:", error)
		throw error
	}
}
