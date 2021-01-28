import React, {useState} from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const BuyButton = () => {
  return (
    <div>
      <form>
      <input type='submit' value='Buy' className='purpleButton'/>
      </form>
    </div>
  )
}

export default BuyButton;
