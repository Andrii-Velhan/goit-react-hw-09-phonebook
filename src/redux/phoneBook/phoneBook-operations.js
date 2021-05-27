import axios from 'axios';
import {
	addContactRequest,
	addContactSuccess,
	addContactError,
	removeContactRequest,
	removeContactSuccess,
	removeContactError,
	fetchContactsRequest,
	fetchContactsSuccess,
	fetchContactsError,
} from './phoneBook-actions';

// const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

//! const fetchContacts with try/catch; async/await :

const fetchContacts = () => async dispatch => {
	dispatch(fetchContactsRequest());

	try {
		const { data } = await axios.get('/contacts');

		dispatch(fetchContactsSuccess(data.sort((a, b) => parseFloat(a.name) - parseFloat(b.name))));
		console.log(data);
	} catch (error) {
		dispatch(fetchContactsError(error.message));
	}
};

const addContact = ({ name, number }) => dispatch => {
	const item = { name, number };

	dispatch(addContactRequest);

	axios
		.post('/contacts', item)
		.then(({ data }) => dispatch(addContactSuccess(data)))
		.catch(error => dispatch(addContactError(error.message)));
};

const removeContact = contactId => dispatch => {
	dispatch(removeContactRequest());

	axios
		.delete(`/contacts/${contactId}`)
		.then(() => dispatch(removeContactSuccess(contactId)))
		.catch(error => dispatch(removeContactError(error.message)));
};

const phoneBookOperations = { fetchContacts, addContact, removeContact };

export default phoneBookOperations;
