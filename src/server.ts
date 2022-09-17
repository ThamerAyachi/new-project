import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on \nhttp://localhost:${PORT}`);
});
