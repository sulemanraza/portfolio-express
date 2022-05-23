const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('static'))
app.use(require("./routers/web.js"));

app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
