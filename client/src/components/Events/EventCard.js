import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const EventCard = (events) => {
  return (
    <div className='eventCard'>
      <img src={events.events.avatar} alt='' />
      <span className='eventCardText'>
        {`${events.events.performername} ${events.events.webdescription}`.toLocaleUpperCase()}
      </span>
    </div>
  );
};

EventCard.propTypes = {
  events: PropTypes.object.isRequired,
};

export default EventCard;
