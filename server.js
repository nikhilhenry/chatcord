const express = require("express");
const path = require("path");

const app = express();

// serve static
app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
