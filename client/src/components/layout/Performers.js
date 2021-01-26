import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPerformers} from "../../actions/performers";
import PerformerCard from "./PerformerCard";

const Performers = ({getPerformers, performer: {performers, loading}}) => {
  useEffect(() => {
    getPerformers();
  }, [getPerformers]);

  const performerList = (props) => {
    performers.map((performer) => <PerformerCard performer={performer} key={performer.id}/>)
  }

  return (
    <div className={'container'}>
      {performerList(props)}
    </div>
  );
};

Performers.propTypes = {
  getPerformers: PropTypes.func.isRequired,
  performer: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  performer: state.performer
});

export default connect(
  mapStateToProps,
  {getPerformers}
)(Performers);
