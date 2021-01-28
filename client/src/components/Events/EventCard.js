import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const EventCard = (events) => {
  return (
    <Fragment>
      <div className='performerCard'>
        <h5>
          {events.events.webdescription}
        </h5>
      </div>
    </Fragment>
  );
};

EventCard.propTypes = {
  events: PropTypes.object.isRequired,
}

export default EventCard
