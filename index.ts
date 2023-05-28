import express from "express"
const app = express()

// underscore before variable to ignore warnings
app.get("/", (_req, res) => {
	res.send("welcome")
})

app.get("/hello", (_req, res) => {
	res.send("Hello Full Stack")
})

app.get("/bmi", (req, res) => {
	const params = req.query
	let { height, weight } = params
	let heightToMeters: number = Number(height) / 100
	let weightToKgs: number = Number(weight)
	let bmi: number = weightToKgs / (heightToMeters * heightToMeters)
	res.send({
		height: heightToMeters,
		weight: weightToKgs,
		bmi: bmi,
	})
})

const PORT = 3000

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})
