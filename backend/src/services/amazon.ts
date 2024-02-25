import cheerio from "cheerio";
import axios from "axios";
import { ProductType } from "../@types";

export const scrapAmazonService = async (keyword: string) => {
  const url: string = `https://www.amazon.com/s?k=${keyword}`;

  // os headers são necessários para que o servidor da Amazon não bloqueie a requisição
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  };

  const response = await axios.get(url, { headers });
  // AquiAqui uso o cheerio para fazer o scraping da página, fazendo o parse do HTML
  const $ = cheerio.load(response.data);

  const products: ProductType[] = [];

  // Aqui eu faço o scraping dos dados que eu quero para montar o objeto que será retornado
  $(".s-result-item").each((index, element) => {
    const title: string = $(element).find("h2").text().trim();
    const rating: string = $(element)
      .find(".a-icon-star-small .a-icon-alt")
      .text()
      .trim();
    const reviews: string = $(element)
      .find(".a-size-small .a-link-normal")
      .text()
      .trim();
    const image: string = $(element).find("img").attr("src") || "";
    const priceFraction = $(element).find(".price__fraction").text().trim();
    const priceDecimals = $(element).find(".price__decimals").text().trim();
    const price = `${priceFraction},${priceDecimals}`;
    const link = $(element).find(".item__info-link").attr("href");

    products.push({ title, rating, reviews, image, price, link });
  });

  return products;
};
