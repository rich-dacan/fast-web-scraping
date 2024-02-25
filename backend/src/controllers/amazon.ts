import { Request, Response } from "express";
import { scrapAmazonService } from "../services/amazon";
import GlobalError from "../errors/GlobalError";

export const scrapAmazon = async (req: Request, res: Response) => {
  const keyword: string = req.query.keyword as string;

  try {
    const products = await scrapAmazonService(keyword);
    res.json(products);
  } catch (error: unknown) {
    throw new GlobalError((error as Error).message, 500);
  }
};
