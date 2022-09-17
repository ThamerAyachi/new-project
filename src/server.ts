import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/download", (req, res) => {
  const url = req.query.url;
  res.json(url);
});

app.listen(PORT, () => {
  console.log(`Server running on \nhttp://localhost:${PORT}`);
});
