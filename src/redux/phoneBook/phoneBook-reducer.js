import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
	changeFilter,
	clearError,
} from './phoneBook-actions';

const initialState = {
	items: [],
	filter: '',
	loading: false,
	error: null,
};

const items = createReducer(initialState.items, {
	[fetchContactsSuccess]: (_, { payload }) => payload,
	[addContactSuccess]: (state, { payload }) => [payload, ...state],
	[removeContactSuccess]: (state, { payload }) =>
		state.filter(({ id }) => id !== payload),
});

const loading = createReducer(initialState.loading, {
	[fetchContactsRequest]: () => true,
	[fetchContactsSuccess]: () => false,
	[fetchContactsError]: () => false,
	[addContactRequest]: () => true,
	[addContactSuccess]: () => false,
	[addContactError]: () => false,
	[removeContactRequest]: () => true,
	[removeContactSuccess]: () => false,
	[removeContactError]: () => false,
});

const filter = createReducer(initialState.filter, {
	[changeFilter]: (_, { payload }) => payload,
});

const setError = (_, { payload }) => payload;

const error = createReducer(initialState.error, {
	[fetchContactsError]: setError,
	[addContactError]: setError,
	[removeContactError]: setError,
	[clearError]: () => null,
});

export default combineReducers({
	items,
	filter,
	loading,
	error,
});