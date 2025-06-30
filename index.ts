import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host";

// 💡 헷갈림 방지를 위해 변수명을 response로 바꿈
app.get("/api/krw-to-usd", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "USD", amount: 1 },
    });
    const result = response.data.result;
    res.send(String(result));
  } catch (err) {
    console.error(err);
    res.status(500).send("ERROR: KRW to USD");
  }
});

// ✅ 나머지도 전부 동일하게 수정
app.get("/api/krw-to-eur", async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "EUR", amount: 1 },
    });
    const result = response.data.result;
    res.send(String(result));
  } catch (err) {
    console.error(err);
    res.status(500).send("ERROR: KRW to EUR");
  }
});

app.get("/api/usd-to-kgs", async (_req: Request, res: Response) => {
  try {
    const response
