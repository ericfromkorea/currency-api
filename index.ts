import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host";

// ✅ 1. 원 → 달러
app.get("/api/krw-to-usd", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "USD" },
    });
    console.log("환율 응답 결과 (KRW→USD):", data); // ★ 로그 추가
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: KRW to USD");
  }
});

// ✅ 2. 원 → 유로
app.get("/api/krw-to-eur", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "EUR" },
    });
    console.log("환율 응답 결과 (KRW→EUR):", data);
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: KRW to EUR");
  }
});

// ✅ 3. 달러 → 솜 (KGS)
app.get("/api/usd-to-kgs", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "KGS" },
    });
    console.log("환율 응답 결과 (USD→KGS):", data);
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: USD to KGS");
  }
});

// ✅ 4. 유로 → 루블
app.get("/api/eur-to-rub", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "EUR", to: "RUB" },
    });
    console.log("환율 응답 결과 (EUR→RUB):", data);
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: EUR to RUB");
  }
});

// ✅ 5. 달러 → 루블
app.get("/api/usd-to-rub", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "RUB" },
    });
    console.log("환율 응답 결과 (USD→RUB):", data);
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: USD to RUB");
  }
});

// ✅ 6. 원 → 솜
app.get("/api/krw-to-kgs", async (_req: Request, res: Response) => {
  try {
    const { data } = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "KGS" },
    });
    console.log("환율 응답 결과 (KRW→KGS):", data);
    res.send(String(data.result));
  } catch {
    res.status(500).send("ERROR: KRW to KGS");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
