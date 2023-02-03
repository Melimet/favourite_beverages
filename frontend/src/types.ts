import { z } from 'zod';

export const BeverageZod = z.object({
  name: z.string().min(1),
  weight: z.number().int().positive(),
  price: z.number().positive(),
  roastLevel: z.number().int().min(1).max(5),
  beverageType: z.enum(['Coffee', 'Tea']),
})

export type BeverageType = z.infer<typeof BeverageZod>;

  