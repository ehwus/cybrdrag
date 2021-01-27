// import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'

const ShowAllButton = () => {
  return (
    <div>
    <form action='/performers'>
      <input type='submit' value='Show All' className='purpleButton'/>
      </form>
    </div>
  )
}

export default ShowAllButton;
