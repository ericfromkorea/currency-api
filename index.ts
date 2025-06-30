import express from "express";
import axios from "axios";
import { parse } from "fast-xml-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/eur-to-rub", async (req, res) => {
  try {
    const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
    const rate = response.data.Valute.EUR.Value;
    res.json({ rate });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch EUR to RUB" });
  }
});

app.get("/api/usd-to-kgs", async (req, res) => {
  try {
    const { data } = await axios.get("https://kgcentralbank.org.kg/rss/kgs.xml");
    const parsed = parse(data, { ignoreAttributes: false });
    const items = parsed.rss.channel.item;
    const usdItem = items.find((item: any) => item.title.includes("USD"));
    const rate = parseFloat(usdItem.description.replace(",", "."));
    res.json({ rate });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch USD to KGS" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
