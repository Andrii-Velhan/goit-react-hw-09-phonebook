import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Notification.scss';
import { phoneBookSelectors } from '../../redux/phoneBook';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { authActions, authSelectors } from '../../redux/auth'

export default function Notification({ message }) {
	const dispatch = useDispatch();
	const errorPb = useSelector(phoneBookSelectors.getError);
	const errorAuth = useSelector(authSelectors.getError);
	const clearErrorPb = useCallback(() => dispatch(phoneBookActions.clearError()), [dispatch]);
	const clearErrorAuth = useCallback(() => dispatch(authActions.clearError()), [dispatch]);

	useEffect(() => {
		setTimeout(() => {
			clearErrorAuth();
		}, 2500);
	}, [errorAuth, clearErrorAuth]);

	useEffect(() => {
		setTimeout(() => {
			clearErrorPb();
		}, 2500);
	}, [errorPb, clearErrorPb]);

	return (
		<CSSTransition
			in={message}
			timeout={250}
			classNames="Notification-fade"
			unmountOnExit>

			<div className="Overlay">
				<p className="Notification">
					{message}
				</p>
			</div>
		</CSSTransition>
	);
};

Notification.propTypes = {
	message: PropTypes.string,
	errorPb: PropTypes.string,
	errorAuth: PropTypes.string,
	clearErrorPb: PropTypes.func,
	clearErrorPAuth: PropTypes.func
};