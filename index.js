const express = require("express");
const routes = require("./server/routes/index");
const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("*", (req, res, next) => {
  // console.log(req.method, req.baseUrl, req.body);
  next();
});

app.use("/", routes);

app.use((err, req, res, next) => {
  console.log(err)
  const errors = {
    400: "bad request",
    401: "unauthorized",
    403: "forbidden",
    404: "not found",
  };
  if (!errors[err.code]) {
    return res.status(500).json({ error: errors[500] });
  }
  else {
    return res.status(err.code).json({ error: errors[err.code] });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// catch (error) {
//   return res.status(400).json({ code: 400, message: error.message});
// }