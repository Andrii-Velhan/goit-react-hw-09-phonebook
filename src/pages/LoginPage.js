import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Logo from '../components/Logo';
class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Logo title="Enter your data" />

        <form onSubmit={this.handleSubmit} className="Form" autoComplete="off">
          <label className="Label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="Form__input"
            value={email}
            onChange={this.handleChange}
          />

          <label className="Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="Form__input"
            value={password}
            onChange={this.handleChange}
          />

          <button type="submit" className="Form__button">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
