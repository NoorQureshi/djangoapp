import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { useEffect } from 'react';

export default function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('jwtToken');

      if (!token) {
        router.replace('/login');
      } else {
        axios
          .post('http://localhost:8000/api/token/verify/', { token })
          .then(() => {
            const decodedToken = jwt.decode(token);

            if (decodedToken) {
              console.log("Log ==> ", decodedToken)
              return <WrappedComponent {...props} user={decodedToken} />;
            } else {
              router.replace('/login');
            }
          })
          .catch(() => {
            router.replace('/login');
          });
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}
