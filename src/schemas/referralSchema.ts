import { z } from "zod";

export const createReferralSchema = z.object({
  body: z.object({
    referrerName: z.string().min(1, "Referrer name is required"),
    referrerEmail: z.string().email("Invalid referrer email format"),
    referrerPhone: z.string().optional(),
    refereeName: z.string().min(1, "Referee name is required"),
    refereeEmail: z.string().email("Invalid referee email format"),
    refereePhone: z.string().optional(),
  }),
});

export type CreateReferralInput = z.infer<typeof createReferralSchema>["body"];
