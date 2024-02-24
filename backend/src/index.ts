import express from "express";
import cors from "cors";
import amazonRoutes from "./routes/amazon";

const app = express();

app.use(cors());
app.use("/api", amazonRoutes);

// app.get("/api/mercado-livre-scraping", async (req, res) => {
//   const keyword = req.query.keyword;
//   const url = `https://lista.mercadolivre.com.br/${keyword}`;

//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const products: {
//       title: string;
//       price: string;
//       link: string | undefined;
//       image: string | undefined;
//     }[] = [];

//     $(".results-item").each((index, element) => {
//       const title = $(element).find(".main-title").text().trim();
//       const price = $(element).find(".price__fraction").text().trim();
//       const link = $(element).find(".item__info-link").attr("href");
//       const image = $(element).find(".lazy-load").attr("data-src");

//       products.push({ title, price, link, image });
//     });

//     console.log("Products:", products);

//     res.json(products);
//   } catch (error) {
//     console.error("Erro ao fazer a requisição:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// const PORT: number = parseInt(process.env.PORT as string, 10) || 3333;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const PORT: number = parseInt(process.env.PORT as string, 10) || 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}! 🚀`));
