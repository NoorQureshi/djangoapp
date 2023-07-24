// utils/auth.js
import axios from 'axios';
import { parseCookies } from 'nookies';

export async function isAuthenticated(ctx) {
  const cookies = parseCookies(ctx);
  const jwtToken = cookies.jwtToken || null;

  if (!jwtToken) {
    return false;
  }

  try {
    const response = await axios.post('http://localhost:8000/api/token/verify/', {
      token: jwtToken,
    }, {headers: {'Content-Type': 'application/json'}});

    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
}
