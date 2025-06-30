const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host";

// 👇 공통 로직 함수로 분리
async function getRate(from, to) {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from, to, amount: 1 },
    });
    console.log(`[${from} → ${to}] API 응답:`, response.data);
    const result = response.data?.result;
    return typeof result === "number" ? result : null;
  } catch (err) {
    console.error(`[${from} → ${to}] 오류:`, err);
    return null;
  }
}

// 👇 6개 라우트
app.get("/api/krw-to-usd", async (_req, res) => {
  const rate = await getRate("KRW", "USD");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: KRW to USD");
});

app.get("/api/krw-to-eur", async (_req, res) => {
  const rate = await getRate("KRW", "EUR");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: KRW to EUR");
});

app.get("/api/usd-to-kgs", async (_req, res) => {
  const rate = await getRate("USD", "KGS");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: USD to KGS");
});

app.get("/api/eur-to-rub", async (_req, res) => {
  const rate = await getRate("EUR", "RUB");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: EUR to RUB");
});

app.get("/api/usd-to-rub", async (_req, res) => {
  const rate = await getRate("USD", "RUB");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: USD to RUB");
});

app.get("/api/krw-to-kgs", async (_req, res) => {
  const rate = await getRate("KRW", "KGS");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR: KRW to KGS");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
