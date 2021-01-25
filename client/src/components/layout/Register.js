import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { username, email, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2) {
      console.log('Passwords do not match')
    } else {
      console.log(formData);
    }
  }

  return (
    <div className='container'>
      <h1 className='authstate'>REGISTER</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <i className='far fa-user'></i>
          <input
            type='text'
            name='username'
            id='username'
            className='formInput'
            placeholder='Username'
            value={username}
            onChange={e => onChange(e)}
            required
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
            value={email}
            onChange={e => onChange(e)}
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
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <i className='fas fa-key'></i>
          <input
            type='password'
            name='password2'
            id='password2'
            className='formInput'
            placeholder='Confirm Password'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' value='submit' className='purpleButton' />
      </form>
    </div>
  );
};

export default Register;
