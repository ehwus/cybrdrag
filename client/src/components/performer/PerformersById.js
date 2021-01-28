import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';
import PerformerProfile from './PerformerProfile';
import { getHistoryById } from '../../actions/performers';
import PerformersHistoryById from '../performerHistory/PerformerHistory';
import BuyButton from '../Buttons/BuyButton';
import SellButton from '../Buttons/SellButton';
import ShowAllButton from '../Buttons/ShowAllButton';

const PerformersById = ({
  getPerformersById,
  performers: { performers },
  history: { history },
  match,
}) => {
  useEffect(() => {
    getPerformersById(match.params.id);
  }, [getPerformersById, match.params.id]);
  console.log(match);
  return (
    <div className='container'>
      <PerformerProfile key={performers._id} performer={performers} />
      <div class='buyAndSellButtons'>
        <button class='purpleButton'>Buy</button>
        <button class='purpleButton'>Sell</button>
      </div>
      <PerformersHistoryById match={match} />
    </div>
  );
};

PerformersById.propTypes = {
  getPerformersById: PropTypes.func.isRequired,
  performers: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  performers: state.performers,
});

export default connect(mapStateToProps, { getPerformersById })(PerformersById);
