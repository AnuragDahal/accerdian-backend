import { AnyZodObject, ZodError } from "zod";

export const validate =
  (schema: AnyZodObject) => async (req: any, res: any, next: any) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: "error",
          message: "Invalid input data",
          errors: error.errors,
        });
      }
      return next(error);
    }
  };
