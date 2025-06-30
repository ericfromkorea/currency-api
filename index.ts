import { XMLParser } from "fast-xml-parser";

app.get("/api/usd-to-kgs", async (req, res) => {
  try {
    const { data } = await axios.get("https://kgcentralbank.org.kg/rss/kgs.xml");

    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(data);

    const items = parsed.rss.channel.item;
    const usdItem = items.find((item: any) => item.title.includes("USD"));
    const rate = parseFloat(usdItem.description.replace(",", "."));

    res.json({ rate });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch USD to KGS" });
  }
});
