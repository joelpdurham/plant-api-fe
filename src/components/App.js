import React from 'react';
import { Search } from './Search';
import { Plants } from './Plants/Plants';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
import { toGetLoading } from '../selectors/selectors';

export default function App() {
  const loading = useSelector(toGetLoading);

  return (
    <>
      { loading ? <Loading /> : <></> }
      <Search />
      <Plants />
    </>
  );
}
