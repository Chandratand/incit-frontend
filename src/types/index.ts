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
