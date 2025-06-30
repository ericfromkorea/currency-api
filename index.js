const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host/latest";

// 환율 계산 함수 (정방향으로)
async function getRate(from, to) {
  try {
    const response = await axios.get(API_BASE, {
      params: { base: from, symbols: to },
    });
    const raw = response.data?.rates?.[to];
    console.log(`[${from} → ${to}] 응답: ${raw}`);
    return raw;
  } catch (err) {
    console.error(`[${from} → ${to}] 오류:`, err);
    return null;
  }
}

// 라우터들
app.get("/api/krw-to-usd", async (_req, res) => {
  const rate = await getRate("KRW", "USD");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.get("/api/krw-to-eur", async (_req, res) => {
  const rate = await getRate("KRW", "EUR");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.get("/api/usd-to-kgs", async (_req, res) => {
  const rate = await getRate("USD", "KGS");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.get("/api/eur-to-rub", async (_req, res) => {
  const rate = await getRate("EUR", "RUB");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.get("/api/usd-to-rub", async (_req, res) => {
  const rate = await getRate("USD", "RUB");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.get("/api/krw-to-kgs", async (_req, res) => {
  const rateKrwUsd = await getRate("KRW", "USD");
  const rateUsdKgs = await getRate("USD", "KGS");
  const combined = rateKrwUsd && rateUsdKgs ? rateKrwUsd * rateUsdKgs : null;
  combined ? res.send(combined.toString()) : res.status(500).send("ERROR");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
