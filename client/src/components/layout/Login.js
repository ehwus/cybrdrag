import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();

    console.log('Success');
  }
  return (
    <div className='container'>
      <h1 className='authstate'>LOGIN</h1>
      <form action='/'>
        <div>
          <i className='far fa-envelope'></i>
          <input type='text' name='email' id='email' className='formInput' value={email}
                 onChange={e => onChange(e)}/>
        </div>
        <div>
          <i className='fas fa-key'></i>
          <input
            type='password'
            name='password'
            id='password'
            className='formInput'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' value='submit' className='purpleButton' />
      </form>
    </div>
  );
};

export default Login;

