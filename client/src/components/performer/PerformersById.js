import React, { useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';
import PerformerProfile from './PerformerProfile';
import { getHistoryById } from '../../actions/performers';
import PerformersHistoryById from "../performerHistory/PerformerHistory";
import BuyButton from "../Buttons/BuyButton";
import SellButton from "../Buttons/SellButton";
import ShowAllButton from "../Buttons/ShowAllButton";
import { buyShares } from '../../actions/shares';
import { sellShares } from '../../actions/shares';

const PerformersById = ({
  buyShares,
  sellShares,
  getPerformersById,
  performers: { performers },
  history: { history },
  match,
  showActions
}) => {
  useEffect(() => {
    getPerformersById(match.params.id);
  }, [getPerformersById, match.params.id]);
  return (
    <div className='container'>
      <h1 className='authstate'>
        <PerformerProfile
          key={performers._id}
          performer={performers}/>
          {showActions && (
            <Fragment>
            <button
              onClick={() => {
                buyShares(performers._id);
              }}
              className='purpleButton'
              value='Buy'
              >
            </button>
            <button
              onClick={() => {
                sellShares(performers._id);
                window.location.reload(false);
              }}
              className='purpleButton'
              value='Sell'
              >
            </button>
            </Fragment>
          )}
        <PerformersHistoryById match={match}/>
      </h1>
      <ShowAllButton/>
    </div>
  );
};

PerformersById.propTypes = {
  sellShares: PropTypes.func.isRequired,
  buyShares: PropTypes.func.isRequired,
  getPerformersById: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
  showActions: PropTypes.bool
};

PerformersById.defaultProps = {
  showActions: true
}

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, { getPerformersById, buyShares, sellShares })(
  PerformersById,
);
