import React from 'react';
import { useSignup } from '../../hooks/auth';
import AuthForm from './AuthForm';

const Signup = () => {
  const signup = useSignup();
  return <AuthForm onSubmit={signup} label="Signup" link="login" />;
};

export default Signup;
