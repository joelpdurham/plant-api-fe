import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useLocation, useHistory } from 'react-router-dom';

const AuthForm = ({ onSubmit, label, link }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(email, password);
    // redirect user to appropriate page (see demo from class 41)
  };

  return (
    <>
      <h2>{ label }</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
        <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      </form>
      <Link to={`/${link}`}>
        <button>{link}</button>
      </Link>
    </>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default AuthForm;
