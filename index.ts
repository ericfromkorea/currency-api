import express, { Request, Response } from "express";
import axios from "axios";
import { XMLParser } from "fast-xml-parser";

const app = express();

// 예시: EUR → RUB
app.get("/api/eur-to-rub", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
    const rate = response.data.Valute.EUR.Value;
    res.json({ rate });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch EUR to RUB" });
  }
});

// 여기에 다른 API도 이어서 추가하면 돼

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
