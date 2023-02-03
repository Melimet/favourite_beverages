import { z } from 'zod';

export const BeverageZod = z.object({
  name: z.string(),
  weight: z.number().int(),
  price: z.number(),
  roastLevel: z.number().int().min(1).max(5),
  beverageType: z.enum(['Coffee', 'Tea']),
})

export type Beverage = z.infer<typeof BeverageZod>;

  