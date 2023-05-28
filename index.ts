import express from "express"
import calculator from "./calculator"

const app = express()

// underscore before variable to ignore warnings
app.get("/", (_req, res) => {
	res.send("welcome")
})

app.post("/calculate", (req, res) => {
	const { num1, num2, op } = req.body
	const result = calculator(num1, num2, op)
	res.send({ result })
})

const PORT = 3000

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`)
})
