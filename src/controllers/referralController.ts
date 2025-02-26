import { sendReferralEmail } from "../services/emailService.js";
import prisma from "../utils/prismaClient.js";

export const createReferral = async (req: any, res: any) => {
  try {
    const {
      referrerName,
      referrerEmail,
      referrerPhone,
      refereeName,
      refereeEmail,
      refereePhone,
    } = req.body;

    // Validate input
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create referral
    const referral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        referrerPhone: referrerPhone || "",
        refereeName,
        refereeEmail,
        refereePhone: refereePhone || "",
      },
    });
    // Send email (uncomment when email service is ready)
    try {
      await sendReferralEmail(refereeEmail, referrerName);
    } catch (error) {
      console.log("Referral email error:", error);
    }

    res.status(201).json(referral);
  } catch (error) {
    console.log("Referral creation error:", error);
    res.status(500).json({
      error: "Failed to create referral",
      details: (error as Error).message,
    });
  }
};
