import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host"; // 무료 환율 API

// 1. 원 → 달러
app.get("/api/krw-to-usd", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "USD" },
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "KRW to USD 실패" });
  }
});

// 2. 원 → 유로
app.get("/api/krw-to-eur", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "EUR" },
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "KRW to EUR 실패" });
  }
});

// 3. 달러 → 솜
app.get("/api/usd-to-kgs", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "KGS" }, // KGS = 키르기스스탄 솜
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "USD to KGS 실패" });
  }
});

// 4. 유로 → 루블
app.get("/api/eur-to-rub", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "EUR", to: "RUB" },
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "EUR to RUB 실패" });
  }
});

// 5. 달러 → 루블
app.get("/api/usd-to-rub", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "RUB" },
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "USD to RUB 실패" });
  }
});

// 6. 원 → 솜
app.get("/api/krw-to-kgs", async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "KGS" },
    });
    res.json({ rate: data.result });
  } catch {
    res.status(500).json({ error: "KRW to KGS 실패" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
