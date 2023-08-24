const axios = require("axios");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.get("/universities/:country", async (req, res) => {
	try {
		const country = req.params.country;

		const universities = await axios.get(
			`http://universities.hipolabs.com/search?country=${country}`
		);

		const filteredData = universities.data.slice(0, 50);

		res.json(filteredData);
	} catch (error) {
		console.log(error);
	}
});

app.listen(port, () => {
	console.log(`Running server on port ${port}`);
});
