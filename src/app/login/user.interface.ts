export interface User {
  name: string;
  passwords: {
    password: string;
    confirmPassword: string;
  },
  account: {
    email: string;
    confirm: string;
  }
}