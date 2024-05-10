import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    token: string;
    id: number;
    name: string;
    email: string;
    isVerified: boolean;
    signUpMethod: string | null;
  }
  interface Session {
    user: User;
  }
}

import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    user: User;
  }
}
