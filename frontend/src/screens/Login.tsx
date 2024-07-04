import { useEffect } from 'react';
const BACKEND_URL =
  import.meta.env.VITE_APP_BACKEND_URL ?? 'http://localhost:3000';

const Login = () => {
  useEffect(() => {
    window.open(`${BACKEND_URL}/auth/google`, '_self');
  }, []);

  return (
    <p>Login</p>
  );
};

export default Login;
