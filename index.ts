import express from "express";
const app = express();

// underscore before variable to ignore warnings
app.get("/", (_req, res) => {
	res.send("welcome");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
