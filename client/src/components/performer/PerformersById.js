import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';
import PerformerProfile from './PerformerProfile';
import { getHistoryById } from '../../actions/performers';
import PerformersHistoryById from '../performerHistory/PerformerHistory';
import BuyButton from '../Buttons/BuyButton';
import SellButton from '../Buttons/SellButton';
import ShowAllButton from '../Buttons/ShowAllButton';
import { buyShares } from '../../actions/shares';
import { sellShares } from '../../actions/shares';

const PerformersById = ({
  buyShares,
  sellShares,
  getPerformersById,
  performers: { performers, loading },
  history: { history },
  match,
  showActions,
}) => {
  useEffect(() => {
    getPerformersById(match.params.id);
  }, [getPerformersById, match.params.id]);

  const [shareAmount, setShareAmount] = useState(1);
  const onChange = (e) => {
    setShareAmount(e.target.value);
  };

  return (
    <Fragment>
      {loading ? (
        <h1> Loading </h1>
      ) : (
        <Fragment>
          <div className='container'>
            <PerformerProfile
              key={performers._id}
              performer={performers}
              history={performers}
            />
            <Fragment>
              <h1 className='dashboardTitle'>
                Share Price: {Math.floor(performers.worth * 0.01)}
              </h1>
              <div className='buyAndSellButtons'>
                <button
                  onClick={() => {
                    buyShares(performers._id, shareAmount);
                  }}
                  className='purpleButton'
                >
                  Buy
                </button>
                <button
                  onClick={() => {
                    console.log(shareAmount);
                    sellShares(performers._id, shareAmount);
                  }}
                  className='purpleButton'
                >
                  Sell
                </button>
                <input
                  type='number'
                  min='1'
                  max='100'
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
            <PerformersHistoryById match={match} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

PerformersById.propTypes = {
  sellShares: PropTypes.func.isRequired,
  buyShares: PropTypes.func.isRequired,
  getPerformersById: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
  showActions: PropTypes.bool,
};

PerformersById.defaultProps = {
  showActions: true,
};

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, {
  getPerformersById,
  buyShares,
  sellShares,
})(PerformersById);
