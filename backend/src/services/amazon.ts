import cheerio from "cheerio";
import axios from "axios";

export const scrapAmazonService = async (keyword: string) => {
  const url: string = `https://www.amazon.com/s?k=${keyword}`;

  // os headers são necessários para que o servidor da Amazon não bloqueie a requisição
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  };

  const response = await axios.get(url, { headers });
  const $ = cheerio.load(response.data);

  const products: {
    title: string;
    rating: string;
    reviews: string;
    image: string;
  }[] = [];

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

    products.push({ title, rating, reviews, image });
  });

  console.log(products);

  return products;
};
