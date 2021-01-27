import React, {useState} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const SellButton = () => {
  return (
    <div>
      <form>
      <input type='submit' value='Sell' className='purpleButton'/>
      </form>
    </div>
  )
}

export default SellButton;
