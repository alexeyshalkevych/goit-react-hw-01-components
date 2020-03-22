import React from 'react';
import PropTypes from 'prop-types';
import ProximaNovaFonts from '../../assets/fonts/ProximaNova/ProximaNova-font';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  LabelItem,
  PercentageItem,
} from './Statistics.styled';

const randomColorGenerator = () =>
  `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256,
  )},${Math.floor(Math.random() * 256)})`;

const Statistics = ({ title, stats }) => (
  <StatisticsSection>
    <ProximaNovaFonts />
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatisticsList>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsListItem
          key={id}
          style={{
            backgroundColor: randomColorGenerator(),
          }}
        >
          <LabelItem>{label}</LabelItem>
          <PercentageItem>{percentage}%</PercentageItem>
        </StatisticsListItem>
      ))}
    </StatisticsList>
  </StatisticsSection>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
