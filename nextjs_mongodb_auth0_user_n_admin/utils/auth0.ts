import { initAuth0 } from '@auth0/nextjs-auth0';
// import config from './config';

export default initAuth0({
  domain: 'dev-wkmwgi-q.auth0.com',
  clientId: 'V8ldizc3zjNgSfJu3RI6ynoqygsp1inx',
  clientSecret: 'NkATIM6pDWZhW0mCFxShMEj9lX89q5neRaix9rxhM7jqzbXIDb61RLsF0MucrNj9',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: 'randodkndiugdoijd863949h4iug98y8',
    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    cookieLifetime: 60 * 60 * 8
  },
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 10000
  }
});