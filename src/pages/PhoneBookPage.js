import 'modern-normalize/modern-normalize.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import Logo from '../components/Logo';
import { connect } from 'react-redux';
import { phoneBookOperations, phoneBookSelectors } from '../redux/phoneBook';
class PhoneBookPage extends Component {
	componentDidMount() {
		this.props.fetchContacts();
	}

	render() {
		return (
			<Container>

				<Logo title="Phonebook" />

				<ContactForm />

				<Filter />

				{this.props.isLoadingContacts && <Spinner />}

				<ContactList />
			</Container>
		);
	}
}

PhoneBookPage.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
	items: phoneBookSelectors.getAllItems(state),
	isLoadingContacts: phoneBookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
	fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);
