const COLORS = {
	primary: "#312651",
	secondary: "#444262",
	tertiary: "#f5f5f5",

	gray: "#83829A",
	gray2: "#C1C0C8",

	white: "#fff",
	lightWhite: "#FAFAFC",
	
	black: "#000",
}

const SIZES = {
	xSmall: 10,
	small: 12,
	medium: 16,
	large: 20,
	xLarge: 24,
	xxLarge: 32,
}

const SHADOWS = {
	small: {
		shadowColor: "#333",
        // ios  
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // android
		elevation: 2,
	},
	medium: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 5.84,
		elevation: 5,
	},
}

export { COLORS, SIZES, SHADOWS }
