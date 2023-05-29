import express from "express";
const app = express();

app.get("/", (_req, res) => {
	console.log("Fetched homepage");
	res.send("hello");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
