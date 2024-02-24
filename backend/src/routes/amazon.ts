import { Router } from "express";
import { scrapAmazon } from "../controllers/amazon";

const router = Router();

router.get("/amazon-scraping", scrapAmazon);

export default router;
