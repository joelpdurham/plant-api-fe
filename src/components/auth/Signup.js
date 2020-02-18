import React from 'react';
import { useSignup } from '../../hooks/auth';
import AuthForm from './AuthForm';

const Signup = () => {
  const login = useLogin();
  return <AuthForm onSubmit={signup} label="Login" />
};

export default Signup;