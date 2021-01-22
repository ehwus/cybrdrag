import React from 'react';

const Register = () => {
  return (
    <div className='container'>
      <h1 className='authstate'>REGISTER</h1>
      <form action='/'>
        <div>
          <i class='far fa-user'></i>
          <input
            type='text'
            name='username'
            id='username'
            className='formInput'
            placeholder='Username'
          />
        </div>
        <div>
          <i className='far fa-envelope'></i>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            className='formInput'
          />
        </div>
        <div>
          <i className='fas fa-key'></i>
          <input
            type='password'
            name='password'
            id='password'
            className='formInput'
            placeholder='Password'
          />
        </div>
        <div>
          <i className='fas fa-key'></i>
          <input
            type='password2'
            name='password2'
            id='password2'
            className='formInput'
            placeholder='Confirm Password'
          />
        </div>

        <input type='submit' value='submit' className='purpleButton' />
      </form>
    </div>
  );
};

export default Register;
