import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name='email'
          placeholder='Email'
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name='password'
          placeholder='Password'
          component={Input}
          validate={[required]}
          type='password'
        />
      </div>
      <div>
        <Field name='rememberMe' type='checkbox' component={Input} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
  const onSubmit = formData => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={'/profile'} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
