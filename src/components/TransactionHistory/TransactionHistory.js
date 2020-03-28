import React from 'react';
import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionBody,
  RowContainer,
  CellHeadContainer,
  CellBodyContainer,
} from './TransactionHistory.styled';

const cellHeadItems = ['Type', 'Amount', 'Currency'];

const TransactionHistory = ({ items }) => (
  <TransactionTable>
    <TransactionHead>
      <RowContainer>
        {cellHeadItems.map(item => (
          <CellHeadContainer key={item}>{item}</CellHeadContainer>
        ))}
      </RowContainer>
    </TransactionHead>
    <TransactionBody>
      {items.map(({ id, type, amount, currency }) => (
        <RowContainer key={id}>
          <CellBodyContainer>{type}</CellBodyContainer>
          <CellBodyContainer>{amount}</CellBodyContainer>
          <CellBodyContainer>{currency}</CellBodyContainer>
        </RowContainer>
      ))}
    </TransactionBody>
  </TransactionTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
