import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchContactsRequest',);
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess',);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const removeContactRequest = createAction('contacts/removeContactRequest',);
export const removeContactSuccess = createAction('contacts/removeContactSuccess',);
export const removeContactError = createAction('contacts/removeContactError');

// export const removeContact = createAction('contacts/remove');

export const changeFilter = createAction('contacts/changeFilter');
export const clearError = createAction('contacts/clearError');