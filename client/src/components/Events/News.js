import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getEvents} from "../../actions/events";
import EventCard from './EventCard';
import PerformerCard from '../performers/PerformerCard'

const News = ({getEvents, events: {events, loading} }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className='container'>
      <h1 className='authstate'>News
      {events.map(event => (
        <div>
        <EventCard key={event._id} events={event}/>
        {/* <PerformerCard key={event.event.performer}/> */}
        </div>
      ))}
      </h1>
    </div>
  );
};

News.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, {getEvents})(News);