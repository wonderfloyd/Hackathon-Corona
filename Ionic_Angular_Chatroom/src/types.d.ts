export interface Message {
  id: string;
  createdAt: Date | any;
  text: string;
  user: User;
}

export interface User {
  uid: string;
  email: string;
  name: string;
}

export type Login = (user: {email: string, password: string}, successCb: () => void, failedCb: () => void) => void;