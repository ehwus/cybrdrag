import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { loadUser } from '../../actions/auth';
import ShareCard from './ShareCard';
import TransactionCard from './TransactionCard';

const UserProfile = ({ loadUser, auth }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <Fragment>
      {auth.loading ? (
        <h1> loading </h1>
      ) : (
        <div>
          <div className='sharesAndTransactions'>
            <div>
              <h1 className='dashboardTitle'>PORTFOLIO</h1>
              <div className='shareHistory'>
                {auth.user.shares.map((share) => (
                  <ShareCard share={share} key={share.id} />
                ))}
              </div>
            </div>
            <UserCard user={auth.user} />
            <div className='transactionHistory'>
              <div>
                <h1 className='dashboardTitle'>TRANSACTIONS</h1>
                <div className='transactionHistory'>
                  {auth.user.transactions.map((transaction) => {
                    return (
                      <TransactionCard
                        transaction={transaction}
                        key={transaction.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});


UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { loadUser })(UserProfile);
