import express from "express";
import { createReferral } from "./controllers/referralController.js";
import { validate } from "./middlewares/validate.js";
import { createReferralSchema } from "./schemas/referralSchema.js";
import cors from "cors";
import prisma from "./utils/prismaClient.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://accerdian-frontend-one.vercel.app",
    ],
  })
);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Referral endpoints
app.post(
  "/api/referrals",
  validate(createReferralSchema),
  async (req, res, next) => {
    try {
      await createReferral(req, res);
    } catch (error) {
      next(error);
    }
  }
);

prisma
  .$connect()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
