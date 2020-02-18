import React from 'react';
import { useLogin } from '../../hooks/auth';
import AuthForm from './AuthForm';

const Login = () => {
  const login = useLogin();
  return <AuthForm onSubmit={login} label="Login" link="signup" />;
};

export default Login;
