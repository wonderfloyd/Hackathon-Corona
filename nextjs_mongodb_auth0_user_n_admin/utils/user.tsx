import React from 'react';
import fetch from 'isomorphic-unfetch';

import { User, UserState } from '../interfaces';

// Use a global to save the user, so we don't have to fetch it again after page navigations
let _user: User;

const UserData = React.createContext<Partial<UserState>>({ user: null, loading: false });

export const fetchUser = async (): Promise<User> => {
  if (_user !== undefined) {
    return _user;
  }

  console.log('fetching from api')
  const res = await fetch('/api/user/profile');
  _user = res.ok ? await res.json() : null;
  console.log('fetch User _user: ', _user)
  return _user;
};

export const UserProvider = ({ value, children }: {value: UserState, children: any}): JSX.Element => {
  const { user } = value;

  // If the user was fetched in SSR add it to _user so we don't fetch it again
  React.useEffect(() => {
    if (!_user && user) {
      _user = user;
    }
  }, []);

  return <UserData.Provider value={value}>{children}</UserData.Provider>;
};

export const useUser = (): Partial<UserState> => React.useContext(UserData);

export const useFetchUser = (): UserState => {
  const [data, setUser] = React.useState<UserState>({
    user: _user || null,
    loading: _user === undefined
  });

  React.useEffect(() => {

    if (_user !== undefined) {
      console.log('useFetchUser useEffect userState defined - returning: ', _user)
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
  }, [_user]);

  return data;
};