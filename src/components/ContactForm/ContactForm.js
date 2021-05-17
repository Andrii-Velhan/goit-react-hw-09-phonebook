import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import { connect } from 'react-redux';
import { phoneBookSelectors, phoneBookOperations } from '../../redux/phoneBook';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    message: null,
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    onSubmit: PropTypes.func,
  };

  static defaultProps = {};

  setMessage = note => {
    this.setState({ message: note });
    setTimeout(() => {
      this.setState({ message: null });
    }, 2500);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  setMessage = note => {
    this.setState({ message: note });
    setTimeout(() => {
      this.setState({ message: null });
    }, 2500);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name === '') {
      this.setMessage('Enter concact name, please!');
      return;
    }

    if (number === '') {
      this.setMessage('Enter concact phone number, please!');
      return;
    }

    if (name === '' && number === '') {
      this.setMessage('Enter data to each of inputs: [name & number]!');
    }

    if (
      this.props.items.find(
        item => item.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      this.setMessage(`Contact ${name} is аlready exists!`);
      return;
    }
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, message } = this.state;
    return (
      <>
        <Notification message={message} />
        <form className="Form" onSubmit={this.handleSubmit}>
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            value={name}
            id="name"
            className="Form__input"
            name="name"
            onChange={this.handleChange}
            placeholder="Anton Cherny"
            autoFocus
          />

          <label className="Label" htmlFor="number">
            Number
          </label>
          <input
            type="tel"
            value={number}
            id="number"
            className="Form__input"
            name="number"
            // pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            required
            onChange={this.handleChange}
            placeholder="+38 (066) 000-00-00"
          />

          <button type="submit" className="Form__button">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: phoneBookSelectors.getAllItems(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(phoneBookOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
