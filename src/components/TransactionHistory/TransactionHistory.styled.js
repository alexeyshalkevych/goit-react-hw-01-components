import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 875px;
  margin: 0 auto;
  font-family: 'HelveticaNeueCyr';
  background-color: rgb(255, 255, 255);
  border-collapse: collapse;
  box-shadow: 0px 3px 10px 6px rgba(0, 0, 0, 0.75);
`;

export const TransactionHead = styled.thead`
  font-size: 13px;
  line-height: 2.308;
  font-weight: 700;
  background-color: rgb(0, 188, 212);
  color: rgb(255, 255, 255);
  text-transform: uppercase;
`;

export const RowContainer = styled.tr`
  :nth-child(even) {
    background-color: rgb(236, 242, 243);
  }
`;

export const CellHeadContainer = styled.th`
  padding: 15px 0 10px;

  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;

export const TransactionBody = styled.tbody`
  font-size: 15px;
  line-height: 2;
  font-weight: 300;
  color: rgb(92, 105, 117);
  text-align: center;
  text-transform: capitalize;
`;

export const CellBodyContainer = styled.td`
  padding: 15px 0 10px;

  :not(:last-child) {
    border-right: 2px solid rgb(224, 230, 231);
  }
`;
