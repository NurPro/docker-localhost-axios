

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../store/user/userThunk';
import { UserMap } from './UserMap';

export const User = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <UserMap user={user} />
      <fieldset>test-bransh</fieldset>
      <fieldset>otkat kommit</fieldset>
      <fieldset>new commmit </fieldset>
    </div>
  )
};
