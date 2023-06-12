import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { allAuthActions } from '../app/auth';
import authService from '../services/api/auth.api';
import { GenericObject } from '../types/general.type';

function useLoggedIn(): [boolean, string?, GenericObject?] {
  const isRunTimes = useRef<number>(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isRunTimes.current > 0) return;

    isRunTimes.current += 1;

    authService
      .loggedIn<GenericObject>()
      .then((payload) => {
        if (!payload.success) {
          setError(payload.message);
          return;
        }

        dispatch(allAuthActions.onAuth(payload.data!));

        // TODO show success alert of below line
        // payload.message;
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return [loading, error, undefined];
}

export default useLoggedIn;
