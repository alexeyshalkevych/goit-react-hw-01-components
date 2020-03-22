import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendsList from '../FriendsList/FriendsList';
import user from '../../user.json';
import statisticalData from '../../statistical-data.json';
import friends from '../../friends.json';
import './App.css';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendsList friends={friends} />
  </>
);
export default App;
