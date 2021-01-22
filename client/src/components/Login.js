import React from 'react';

const Login = () => {
  return (
    <div className='container'>
      <h1 className='authstate'>LOGIN</h1>
      <form action='/'>
        <div>
          <i className='far fa-envelope'></i>
          <input type='text' name='email' id='email' className='formInput' />
        </div>
        <div>
          <i className='fas fa-key'></i>
          <input
            type='password'
            name='password'
            id='password'
            className='formInput'
          />
        </div>
        <input type='submit' value='submit' className='purpleButton' />
      </form>
    </div>
  );
};

export default Login;
