import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host";

// ✅ 1. 원 → 달러
app.get("/api/krw-to-usd", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "USD", amount: 1 },
    });
    console.log("📦 KRW→USD 응답:", response.data);  // 응답 로그 찍기
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ KRW→USD 에러:", err);
    res.status(500).send("ERROR: KRW to USD");
  }
});

// ✅ 2. 원 → 유로
app.get("/api/krw-to-eur", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "EUR", amount: 1 },
    });
    console.log("📦 KRW→EUR 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ KRW→EUR 에러:", err);
    res.status(500).send("ERROR: KRW to EUR");
  }
});

// ✅ 3. 달러 → 솜
app.get("/api/usd-to-kgs", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "KGS", amount: 1 },
    });
    console.log("📦 USD→KGS 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ USD→KGS 에러:", err);
    res.status(500).send("ERROR: USD to KGS");
  }
});

// ✅ 4. 유로 → 루블
app.get("/api/eur-to-rub", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "EUR", to: "RUB", amount: 1 },
    });
    console.log("📦 EUR→RUB 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ EUR→RUB 에러:", err);
    res.status(500).send("ERROR: EUR to RUB");
  }
});

// ✅ 5. 달러 → 루블
app.get("/api/usd-to-rub", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "RUB", amount: 1 },
    });
    console.log("📦 USD→RUB 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ USD→RUB 에러:", err);
    res.status(500).send("ERROR: USD to RUB");
  }
});

// ✅ 6. 원 → 솜
app.get("/api/krw-to-kgs", async (_req: Request, res: Response) => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "KGS", amount: 1 },
    });
    console.log("📦 KRW→KGS 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("❌ KRW→KGS 에러:", err);
    res.status(500).send("ERROR: KRW to KGS");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
