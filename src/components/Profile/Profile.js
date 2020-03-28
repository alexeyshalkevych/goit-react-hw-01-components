import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  AvatarImage,
  Name,
  NameTag,
  Location,
  StatsList,
  StatsListItem,
  LabelItem,
  QuantityItem,
} from './Profile.styled';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileContainer>
    <DescriptionContainer>
      <AvatarImage src={avatar} alt="user avatar" />
      <Name>{name}</Name>
      <NameTag>@{tag}</NameTag>
      <Location>{location}</Location>
    </DescriptionContainer>
    <StatsList>
      <StatsListItem>
        <LabelItem>Followers</LabelItem>
        <QuantityItem>{followers}</QuantityItem>
      </StatsListItem>
      <StatsListItem>
        <LabelItem>Views</LabelItem>
        <QuantityItem>{views}</QuantityItem>
      </StatsListItem>
      <StatsListItem>
        <LabelItem>Likes</LabelItem>
        <QuantityItem>{likes}</QuantityItem>
      </StatsListItem>
    </StatsList>
  </ProfileContainer>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
