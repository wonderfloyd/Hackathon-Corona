import { initAuth0 } from '@auth0/nextjs-auth0';

const domain = process.env.domain;
const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const localUrl = process.env.localUrl;

export default initAuth0({
  domain: domain as string,
  clientId: clientId as string,
  clientSecret,
  scope: 'openid profile',
  redirectUri: `${localUrl}/api/callback`,
  postLogoutRedirectUri: `${localUrl}`,
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