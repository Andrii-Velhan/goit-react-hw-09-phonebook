import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
	link: {
		display: 'inline-block',
		textDecoration: 'none',
		padding: 12,
		fontWeight: 700,
		color: '#2A363B',
	},
	activeLink: {
		color: '#E84A5F',
	},
};

export default function Navigation() {
	const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
	return (
		<nav>
			{!isLoggedIn && (
				<NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
					Home
				</NavLink>
			)}

			{
				isLoggedIn && (
					<NavLink
						to="/contacts"
						exact
						style={styles.link}
						activeStyle={styles.activeLink}
					>
						Phonebook
					</NavLink>
				)}
		</nav>
	)
}