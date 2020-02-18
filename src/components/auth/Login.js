import React from 'react';
import { useLogin } from '../../hooks/auth'
import AuthForm from './AuthForm';
AuthForm;
import AuthForm from './AuthForm';

const Login = () => {
  const login = useLogin();
  return <AuthForm onSubmit={login} label="Login" />;
}

export default Login;