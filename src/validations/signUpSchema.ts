import { z } from "zod";

const signUpSchema = z
  .object({
    username: z.string().min(1, { message: "UserName is required" }),
    email: z.string().min(1, { message: "Email is required" }).email(),
    password: z
      .string()
      .min(1, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string()
                    .min(1, { message: "Confirm Password is required" }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password does not match",
    path: ["confirmPassword"],
  });

type signUpType = z.infer<typeof signUpSchema>;
export {signUpSchema , type signUpType};
