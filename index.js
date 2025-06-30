const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host/latest";

// 환율 불러오는 함수
async function getRate(base, target) {
  try {
    const response = await axios.get(API_BASE, {
      params: { base, symbols: target }
    });
    const rate = response.data?.rates?.[target];
    console.log(`[${base} → ${target}] 응답:`, rate);
    return typeof rate === "number" ? rate : null;
  } catch (err) {
    console.error(`[${base} → ${target}] 오류:`, err);
    return null;
  }
}

// 라우터
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
  const rate = await getRate("KRW", "KGS");
  rate ? res.send(rate.toString()) : res.status(500).send("ERROR");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
