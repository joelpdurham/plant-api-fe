import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchResults } from '../actions/actions';
import { useHistory } from 'react-router-dom';

export const useSearchApi = () => {
  const dispatch = useDispatch();
  const [input, handleChangeInput] = useState('');
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchResults(input));
    history.push('/plants');
  };

  return { input, handleChangeInput, handleSubmit };
};
