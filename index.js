const express = require("express");
const routes = require("./server/routes/index");
const app = express();
const port = process.env.NODE_ENV || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("*", (req, res, next) => {
  next();
});

app.use("/", routes);

app.use((err, req, res, next) => {
  const message = {
    400: "Bad request",
    401: "Missing required data",
    403: "Already in use",
    404: "Not found",
  };
  if (!message[err.code]) {
    return res.status(500).json({ error: message[500] });
  } else {
    return res.status(err.code).json({ error: message[err.code] });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
