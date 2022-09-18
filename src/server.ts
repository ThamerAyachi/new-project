import express, { Request, Response } from "express";
import path from "path";
import ytdl from "ytdl-core";

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/static", express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/download", (req: Request, res: Response) => {
  const url: string = req.query.url as string;
  res.json(url);

  const date = new Date();

  res.header(
    "Content-Disposition",
    `attachment; filename="${date.getTime()}.mp4"`
  );

  ytdl(url, {
    format: "mp4" as unknown as undefined,
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running on \nhttp://localhost:${PORT}`);
});
