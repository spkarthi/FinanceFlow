import {useState, useEffect} from 'react';
import { data } from 'react-router-dom';

export default function useAsyncData(asyncFunction, dependencies = []) {
  const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    asyncFunction()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        if (!cancelled) setState({ data: null, loading: false, error });
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}