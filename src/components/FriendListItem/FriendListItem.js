import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ItemStatus,
  ItemAvatar,
  ItemName,
} from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <ItemStatus isOnline={isOnline} />
    <ItemAvatar src={avatar} alt="avatar-image" />
    <ItemName>{name}</ItemName>
  </ListItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
