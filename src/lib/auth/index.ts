import { NextAuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import api from '../api';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 3600,
    updateAge: 0,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const res = await api.post('auth/sign-in', credentials);

          if (res.data.data) {
            return { token: res.data.data.token, ...res.data.data.user } as any;
          }
          return null;
        } catch (error) {
          throw new Error(JSON.stringify(error));
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      async profile(profile, tokens) {
        try {
          const res = await api.post('auth/google/verify', { idToken: tokens.id_token });
          return { token: res.data.data.token, ...res.data.data.user };
        } catch (error) {
          throw new Error('SIgnIn Failed');
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      async profile(profile, tokens) {
        try {
          const res = await api.post('auth/facebook/verify', { idToken: tokens.access_token });
          return { token: res.data.data.token, ...res.data.data.user };
        } catch (error) {
          throw new Error('SIgnIn Failed');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        token = { ...token, ...session };
      }
      if (user) return { ...token, ...user };
      return token;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/dashboard';
    },
  },
  pages: {
    signIn: '/sign-in',
  },
};

export const getAuthSession = () => getServerSession(authOptions);
