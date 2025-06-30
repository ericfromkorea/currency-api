import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.frankfurter.app/latest";

// ✅ 공통 요청 함수
const fetchRate = async (from, to) => {
  try {
    const response = await axios.get(API_BASE, {
      params: { from, to }
    });
    const rate = response.data.rates[to];
    return rate || null;
  } catch (error) {
    console.error(`[${from} → ${to}] 요청 에러:`, error);
    return null;
  }
};

// ✅ 1. 원 → 달러
app.get("/api/krw-to-usd", async (_req, res) => {
  const rate = await fetchRate("KRW", "USD");
  res.send(rate ? String(rate) : "ERROR");
});

// ✅ 2. 원 → 유로
app.get("/api/krw-to-eur", async (_req, res) => {
  const rate = await fetchRate("KRW", "EUR");
  res.send(rate ? String(rate) : "ERROR");
});

// ✅ 3. 달러 → 솜
app.get("/api/usd-to-kgs", async (_req, res) => {
  const rate = await fetchRate("USD", "KGS");
  res.send(rate ? String(rate) : "ERROR");
});

// ✅ 4. 유로 → 루블
app.get("/api/eur-to-rub", async (_req, res) => {
  const rate = await fetchRate("EUR", "RUB");
  res.send(rate ? String(rate) : "ERROR");
});

// ✅ 5. 달러 → 루블
app.get("/api/usd-to-rub", async (_req, res) => {
  const rate = await fetchRate("USD", "RUB");
  res.send(rate ? String(rate) : "ERROR");
});

// ✅ 6. 원 → 솜
app.get("/api/krw-to-kgs", async (_req, res) => {
  const rate = await fetchRate("KRW", "KGS");
  res.send(rate ? String(rate) : "ERROR");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
