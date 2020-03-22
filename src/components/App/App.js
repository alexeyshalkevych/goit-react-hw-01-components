import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../user.json';
import './App.css';

const App = () => (
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
);
export default App;
