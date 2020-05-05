import React from 'react';
import fetch from 'isomorphic-unfetch';

import { User, UserState } from '../interfaces';

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState: User;

export const UserData = React.createContext<Partial<UserState>>({ user: null, loading: false });

export const fetchUser = async (): Promise<User> => {
  if (userState !== undefined) {
    return userState;
  }

  console.log('fetching from api')
  const res = await fetch('/api/user/profile');
  userState = res.ok ? await res.json() : null;
  console.log('fetch User userState: ', userState)
  return userState;
};

export const UserProvider = ({ value, children }: {value: UserState, children: any}): JSX.Element => {
  const { user } = value;

  // If the user was fetched in SSR add it to userState so we don't fetch it again
  React.useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);

  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export const useUser = () => React.useContext(UserData);

export const useFetchUser = () => {
  const [data, setUser] = React.useState<UserState>({
    user: userState || null,
    loading: userState === undefined
  });

  React.useEffect(() => {
    console.log('useFetchUser useEffect');

    if (userState !== undefined) {
      console.log('useFetchUser useEffect userState defined - returning: ', userState)
      return;
    }

    let isMounted = true;

    fetchUser().then((user: User) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        setUser({ user, loading: false });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [userState]);

  console.log('useFetchUser data: ', data)
  return data;
};