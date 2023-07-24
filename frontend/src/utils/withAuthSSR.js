// withAuthSSR.js

import { parseCookies } from 'nookies';
import jwt_decode from 'jwt-decode';
import { isAuthenticated } from '@/utils/auth';

const withAuthSSR = (WrappedComponent) => {
  return async (context) => {
    const { jwtToken } = parseCookies(context);
    let isLoggedIn = false;

    if (jwtToken) {
      try {
        jwt_decode(jwtToken);
        isLoggedIn = await isAuthenticated(context);
      } catch (error) {
        console.log('Invalid JWT token:', error.message);
      }
    }

    if (!isLoggedIn) {
      if (context.res) {
        context.res.writeHead(302, { Location: '/' });
        context.res.end();
      } else {
        Router.replace('/');
      }
      return { props: {} };
    }

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(context));

    return { props: { ...componentProps, isLoggedIn } };
  };
};

export default withAuthSSR;
