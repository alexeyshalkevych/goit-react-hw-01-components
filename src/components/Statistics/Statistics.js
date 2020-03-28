import React from 'react';
import PropTypes from 'prop-types';
import randomColorGenerator from '../../helpers/randomColorGenerator';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  LabelItem,
  PercentageItem,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => (
  <StatisticsSection>
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
