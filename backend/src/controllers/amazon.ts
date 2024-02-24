import { Request, Response } from "express";
import { scrapAmazonService } from "../services/amazon";

export const scrapAmazon = async (req: Request, res: Response) => {
  const keyword: string = req.query.keyword as string;

  try {
    const products = await scrapAmazonService(keyword);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
