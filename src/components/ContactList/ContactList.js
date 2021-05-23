import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { phoneBookSelectors, phoneBookOperations } from '../../redux/phoneBook';

export default function ContactList() {
	const dispatch = useDispatch();
	const items = useSelector(phoneBookSelectors.getVisibleContacts);
	const onRemoveContact = id => dispatch(phoneBookOperations.removeContact(id));

  return (
    <TransitionGroup component="ul" className="ContactList">
			{items.map(({ id, name, number }, i) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames="ContactList__item-fade"
        >
          <li key={id} className="ContactList__item">
            <p className="ContactList__name">
							{i + 1}. {name}: {number}
            </p>

            <IconButton
              className="ContactList__button"
              onClick={() => onRemoveContact(id)}
              aria-label="Remove Contact"
            >
              <DeleteIcon width="12" height="12" fill="#fff" />
            </IconButton>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemoveContact: PropTypes.func,
};

// const mapStateToProps = state => ({
//   items: phoneBookSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onRemoveContact: id => dispatch(phoneBookOperations.removeContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
