// import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { fetchResults } from '../actions/actions';

export const useSearchApi = () => {
  // const dispatch = useDispatch();
  const [input, handleChangeInput] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // dispatch(fetchResults(input));
  };

  return { input, handleChangeInput, handleSubmit };
};
