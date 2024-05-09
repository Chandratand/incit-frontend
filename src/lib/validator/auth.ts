import { z } from 'zod';

export const SignInValidator = z.object({
  email: z.string().email().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');

export const SignUpValidator = z
  .object({
    name: z.string().min(1, 'Required'),
    email: z.string().email(),
    password: z.string().regex(passwordRegex, {
      message: 'Password must be at least 8 characters and include at least one uppercase, one lowercase, one number, and one special character',
    }),
    confirmPassword: z.string().min(1, 'Required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // This shows where the error message should be attached in case of mismatch
  });
