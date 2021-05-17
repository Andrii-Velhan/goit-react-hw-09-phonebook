import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
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

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {!isAuthenticated && (
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
    )}

    {isAuthenticated && (
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
);

const mapstateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapstateToProps)(Navigation);
