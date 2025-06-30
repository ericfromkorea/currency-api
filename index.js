const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_BASE = "https://api.exchangerate.host";

// 1. 원 → 달러
app.get("/api/krw-to-usd", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "USD", amount: 1 },
    });
    console.log("KRW→USD 응답:", response.data);
    res.send(String(response.data.result));
  } catch (err) {
    console.error("KRW→USD 에러:", err);
    res.status(500).send("ERROR: KRW to USD");
  }
});

// 2. 원 → 유로
app.get("/api/krw-to-eur", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "EUR", amount: 1 },
    });
    res.send(String(response.data.result));
  } catch (err) {
    res.status(500).send("ERROR: KRW to EUR");
  }
});

// 3. 달러 → 솜
app.get("/api/usd-to-kgs", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "KGS", amount: 1 },
    });
    res.send(String(response.data.result));
  } catch (err) {
    res.status(500).send("ERROR: USD to KGS");
  }
});

// 4. 유로 → 루블
app.get("/api/eur-to-rub", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "EUR", to: "RUB", amount: 1 },
    });
    res.send(String(response.data.result));
  } catch (err) {
    res.status(500).send("ERROR: EUR to RUB");
  }
});

// 5. 달러 → 루블
app.get("/api/usd-to-rub", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "USD", to: "RUB", amount: 1 },
    });
    res.send(String(response.data.result));
  } catch (err) {
    res.status(500).send("ERROR: USD to RUB");
  }
});

// 6. 원 → 솜
app.get("/api/krw-to-kgs", async (_req, res) => {
  try {
    const response = await axios.get(`${API_BASE}/convert`, {
      params: { from: "KRW", to: "KGS", amount: 1 },
    });
    res.send(String(response.data.result));
  } catch (err) {
    res.status(500).send("ERROR: KRW to KGS");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
