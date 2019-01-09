import Profile from './profile';
import React from 'react';

export default () => (
  <Profile
    name="Edit profile"
    profile={{
      name: "Dylan Foster",
      phone: "1231231234",
      email: "dylan@guidebook.com",
      gender: "male"
    }}
  />
);
