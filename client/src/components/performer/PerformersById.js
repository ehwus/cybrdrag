import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';
import PerformerProfile from './PerformerProfile';
import { getHistoryById } from '../../actions/performers';
import PerformersHistoryById from "../performerHistory/PerformerHistory";
import BuyButton from "../Buttons/BuyButton";
import SellButton from "../Buttons/SellButton";
import GoBack from "../Buttons/GoBack";


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
      <h1 className='authstate'>
        <PerformerProfile
          key={performers._id}
          performer={performers}/>
          <BuyButton/>
          <SellButton/>
        <PerformersHistoryById match={match}/>
      </h1>
      <GoBack/>
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

export default connect(mapStateToProps, { getPerformersById })(
  PerformersById
);
