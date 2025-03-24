import { jwtDecode } from 'jwt-decode'; // Or `import jwtDecode from 'jwt-decode';` for older versions


export const isLoggedIn = () => {
  const token = getTokenFromCookies();
  console.log(token)
  if (!token) return true; // No token, not logged in

  try {
    const decoded = jwtDecode(token); // Decode the JWT
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp < currentTime; // Check if token is still valid
  } catch (error) {
    console.error('Invalid Token:', error);
    return false; // Invalid token, not logged in
  }
};
