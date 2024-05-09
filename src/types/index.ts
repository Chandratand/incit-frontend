export interface UserList {
  id: number;
  email: string;
  name: string;
  signUpAt?: string;
  logInCount?: number;
  logOutAt?: string;
}

export interface UserStats {
  totalSignedUpUsers?: number;
  todaysActiveUsers?: number;
  avgActiveUsers?: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  isVerified: boolean;
  signUpMethod: string | null;
}

export interface Auth {
  token: string;
  user: User;
}
