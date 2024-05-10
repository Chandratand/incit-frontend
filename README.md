# INCIT Frontend

#### Description

INCIT frontend is a simple website designed to manage user interactions. It supports operations such as user authentication, profile management, and statistics gathering.

Demo URL : https://incit-frontend-five.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instalation

To set up the INCIT Frontend locally, follow these steps:

1.  **Clone the repository:**

```bash

git clone https://github.com/Chandratand/incit-frontend

```

2.  **Navigate to the project directory:**

```bash

cd incit-frontend

```

3.  **Navigate to the project directory:**

```bash

npm install

```

## Environment Variables

To run this frontend project, you will need to add the following environment variables to your `.env.local` or `.env` file. You can start by copying the provided `.env.example` file to a new file named `.env.local` or `.env`, then filling in the necessary values.

- `NEXT_PUBLIC_API_URL`: The URL of the backend API. This should be the base URL where your backend server is accessible.
- `NEXTAUTH_URL`: The base URL of your site as it should appear when authenticating with next-auth.
- `NEXTAUTH_SECRET`: A secret key used for session token and CSRF token generation in NextAuth.js. It should be a long, random, and secure string.
- `GOOGLE_CLIENT_ID`: The client ID provided by Google that is used to enable Google authentication via NextAuth.js.
- `GOOGLE_CLIENT_SECRET`: The client secret provided by Google that is used alongside the client ID for Google authentication.
- `FACEBOOK_CLIENT_ID`: The client ID provided by Facebook for enabling Facebook authentication in your application.
- `FACEBOOK_CLIENT_SECRET`: The client secret from Facebook used for authentication, paired with the Facebook Client ID.

### Note:

Ensure not to share your `.env.local` files or include them in your version-controlled source code as they contain sensitive information. The `.env.example` file is a safe template to share and commit, giving other developers a guide to set up their environment variables.

# Getting Started

First, run the development server:

```bash

npm  run  dev
# or
yarn  dev
# or
pnpm  dev
# or
bun  dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

- User authentication using [Next-auth](https://next-auth.js.org/)
- Responsive UI using [Shadcn/UI](https://ui.shadcn.com/) with [Tailwind CSS](https://tailwindcss.com/).
- Authentication: Sign in and sign up functionality with email, google and facebook.
- Email Verification: Verify email addresses and resend verification emails.
- User Management: Fetch user details and statistics.
- Profile Management: Update user profiles.
- Password Management: Reset passwords.
