import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
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
    login(email, password);
  }

  if (isAuthenticated) {
    return <Redirect to={"/dashboard"} />
  }

  return (
    <div className='container'>
      <h1 className='authstate'>LOGIN</h1>
      <form onSubmit={e => onSubmit(e)}>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);

