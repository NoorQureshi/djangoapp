import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export default function withAuth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const access_token = Cookies.get();

    useEffect(() => {
      async function verifyToken() {
        console.log("Log ==> " + access_token)
        if (!access_token) {
          router.push('/login');
        } else {
          try {
            await axios.get('http://localhost:8000/api/token/verify/', {
              headers: { Authorization: `Bearer ${access_token}` },
              withCredentials: true,
            });
            setIsLoading(false);
          } catch (error) {
            console.error("Error verifying token: ", error);
            Cookies.remove('access_token');
            router.push('/login');
          }
        }
      }
      verifyToken();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;  // You can replace this with a loading spinner or similar
    } else {
      return <WrappedComponent {...props} />;
    }
  };
}
