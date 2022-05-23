const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "static")));
app.use(require("./routers/web.js"));
console.log(path.join(__dirname, "static"))
app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
