import express from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server working is ok");
});

app.listen(port, () => {
  console.log(`server working well, port: ${port}`);
});
