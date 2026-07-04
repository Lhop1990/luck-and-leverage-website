import { z } from "zod";

export const ServiceEnum = z.enum(["advisory", "search"]);

export const LeadSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Surname is required").max(80),
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid contact number")
    .max(40)
    .regex(/^[+\d\s().-]+$/, "Use digits, spaces, +, -, ( ) only"),
  company: z.string().trim().min(1, "Company name is required").max(120),
  service: ServiceEnum,
  howHeard: z
    .string()
    .trim()
    .min(2, "Please tell us how you heard about us")
    .max(500),
  // Honeypot — must be empty
  hp: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;
export type Service = z.infer<typeof ServiceEnum>;
