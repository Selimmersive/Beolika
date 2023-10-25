import { z } from 'zod';

export const ReviewSchema = z.object({
  rating: z.number().positive().min(1),
  name: z.string().trim().min(2, { message: "Name must be 2 or more characters long" }),
  title: z.string().trim().optional(),
  comment: z.string().trim().min(2, { message: "Comment must be 2 or more characters long." }).max(1000, { message: "The comment must not exceed 1000 characters." }),
}); 