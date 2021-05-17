import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import Logo from '../components/Logo';
class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <Logo title="Enter your data" />

        <form onSubmit={this.handleSubmit} className="Form" autoComplete="off">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="Form__input"
            value={name}
            onChange={this.handleChange}
          />
          <label className="Label" htmlFor="email">
            Mail
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
          </label>{' '}
          <input
            type="password"
            name="password"
            className="Form__input"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit" className="Form__button">
            Registration
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
