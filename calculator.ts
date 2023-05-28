type Operation = "add" | "substract" | "multiply" | "divide"

function calculator(a: number, b: number, op: Operation): number | string {
	if (isNaN(a) || isNaN(b)) {
		return "given input is not a number"
	} else {
		if (op === "add") return a + b
		else if (op === "substract") return a - b
		else if (op === "multiply") return a * b
		else if (op === "divide") {
			if (a === 0 || b === 0) return "Cannot divide by 0"
			else return a / b
		} else return "Wrong data type"
	}
}

export default calculator