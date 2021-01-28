import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/events';
import EventCard from './EventCard';

const News = ({ getEvents, events: { events, loading } }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <div className='news'>
      <h1 className='dashboardTitle'>News</h1>
      {events.map((event) => (
        <EventCard key={event._id} events={event} />
      ))}
    </div>
  );
};

News.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, { getEvents })(News);
