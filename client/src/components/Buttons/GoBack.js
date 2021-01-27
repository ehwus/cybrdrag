import React, {useState} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GoBack = () => {
  return (
    <div>
      <form action="/performers" className="purpleButton">
        <button class="float-left submit-button" >Go Back</button>
    </form>
    </div>
  )
}

export default GoBack;