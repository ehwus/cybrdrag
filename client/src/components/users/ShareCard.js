import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPerformersById } from '../../actions/performers';

const ShareCard = ({ share, getPerformersById, performers: { performers, loading } }) => {
  useEffect(() => {
    getPerformersById(share.performer);
  },[getPerformersById, share.performer])

  return (
    <Fragment>
    { loading ?  (<h1> loading </h1>) : (

    <div>
    <img src={share.avatar} alt='' />
      {share.performername}
      {share.quantity}
      total value {share.quantity * performers.worth *  0.01 }
    </div>
  )}
  </Fragment>
)
}

const mapStateToProps = (state) => ({
  performers: state.performers,
});

ShareCard.propTypes ={
  getPerformersById: PropTypes.func.isRequired,
  share: PropTypes.object.isRequired,
  performers: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
  getPerformersById,
})(ShareCard);
