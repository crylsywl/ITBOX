const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
