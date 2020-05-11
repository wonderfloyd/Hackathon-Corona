// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export interface UserState {
  user: User | null,
  loading: boolean
}

export interface User {
  givenName: string,
  familyName: string,
  nickname: string,
  name: string,
  pictureUrl: string,
  locale: string,
  updatedAt: string,
  sub: string,
  ["http://localhost:3000/roles"]: string
}

export interface Book {
  name: string,
  author: string,
  user: string
}
