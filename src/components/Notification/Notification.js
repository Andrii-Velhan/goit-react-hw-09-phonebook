import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Notification.scss';

const Notification = ({ message }) => {
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
	message: PropTypes.string
};

export default Notification;