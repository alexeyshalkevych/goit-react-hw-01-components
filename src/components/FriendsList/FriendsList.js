import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import List from './FriendsList.styled';

const FriendsList = ({ friends }) => (
  <List>
    {friends.map(item => (
      <FriendListItem key={item.id} {...item} />
    ))}
  </List>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendsList;
