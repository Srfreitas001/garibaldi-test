const express = require("express");
const path = require("path");

const PORT = 3000;
const STATIC_ASSETS_PATH = path.resolve(`${__dirname}/../../static`);

const app = express();

app.use("/web", express.static(STATIC_ASSETS_PATH)); //TESTE WEB

// GET WEB PAGE
app.get("/", (request, response) => {
	response.send(`
<!DOCTYPE html>
<html>
	<body>
		<div id="container"></div>
		<script src="/web/bundle.js"></script>
	</body>
</html>
	`);
});


app.listen(
	PORT, () => 
		console.log(`PORT::: ${PORT}.\n\nLOCALHOST::: http://localhost:${PORT}`
			
		))
