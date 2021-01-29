import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const TransactionCard = ({ transaction }) => {
  let typeOfTransaction = transaction.type === 'buy' ? 'Purchased' : 'Sold';
  return (
    <div className='transactionCard'>
      {typeOfTransaction} for {transaction.pricepershare} on{' '}
      <Moment date={transaction.date} format='DD/MM/YY' />
    </div>
  );
};

TransactionCard.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default TransactionCard;
