import express from "express";
import { calculator, Operation } from "./calculator";

const app = express();

// underscore before variable to ignore warnings
app.get("/", (_req, res) => {
	res.send("welcome");
});

app.post("/calculate", (req, res) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { num1, num2, op } = req.body;

	if (!num1 || isNaN(Number(num1))) {
		return res
			.status(400)
			.send({ error: num1 + "sent value is not a valid number" });
	} else if (!num2 || isNaN(Number(num2))) {
		return res
			.status(400)
			.send({ error: num1 + "sent value is not a valid number" });
	} else {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		const result = calculator(Number(num1), Number(num2), op as Operation);

		return res.send({ result });
	}
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
