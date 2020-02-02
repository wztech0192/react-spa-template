import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector(state => state.user);
  return <h1>You are {user.userFullName || 'Ghost?'} !</h1>;
};

export default UserProfile;
