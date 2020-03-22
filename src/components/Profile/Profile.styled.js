import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 250px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 32px;
  font-family: 'Lato Regular';
  background-color: rgb(231, 236, 242);
  color: rgb(118, 134, 150);
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(191, 205, 222, 0.75);
`;

export const DescriptionContainer = styled.div`
  padding-top: 30px;
  padding-bottom: 25px;
  text-align: center;
  background-color: rgb(255, 255, 255);
`;

export const AvatarImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 24px;
`;

export const Name = styled.p`
  margin: 0;
  font-family: 'Lato Bold';
  font-size: 18px;
  color: rgb(18, 34, 54);
`;

export const NameTag = styled.p`
  margin: 0;
`;

export const Location = styled.p`
  margin: 0;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 33.33333%;
  padding: 18px 15px 20px 15px;
  text-align: center;
  background-color: rgb(243, 246, 249);
  border-top: 1px solid rgb(228, 233, 240);

  :not(:last-child) {
    border-right: 1px solid rgb(228, 233, 240);
  }
`;

export const LabelItem = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.2;
`;

export const QuantityItem = styled.span`
  font-family: 'Lato Black';
  line-height: 1.2;
  color: rgb(31, 51, 73);
`;
