import PropTypes from 'prop-types';
import './Filter.scss';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { phoneBookSelectors, changeFilter } from '../../redux/phoneBook';

const Filter = ({ value, onChangeFilter, onClearFilter, items }) => (
  <CSSTransition
    in={items.length > 1}
    timeout={250}
    classNames="Filter-fade"
    unmountOnExit
    onExiting={() => onClearFilter()}
  >
    <div className="filterForm">
      <label htmlFor="find" className="Label filterLabel">
        Find contact by name
      </label>
      <input
        type="text"
        value={value}
        id="find"
        className="filterInput"
        onChange={onChangeFilter}
      />
    </div>
  </CSSTransition>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  value: phoneBookSelectors.getFilter(state),
  items: phoneBookSelectors.getAllItems(state),
});

const mapDispatchToProps = dispatsh => ({
  onChangeFilter: e => dispatsh(changeFilter(e.target.value)),
  onClearFilter: e => dispatsh(changeFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
