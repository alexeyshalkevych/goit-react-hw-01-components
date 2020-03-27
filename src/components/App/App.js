import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendsList from '../FriendsList/FriendsList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import user from '../../database/user.json';
import statisticalData from '../../database/statistical-data.json';
import friends from '../../database/friends.json';
import transactions from '../../database/transactions.json';
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
    <TransactionHistory items={transactions} />
  </>
);
export default App;
