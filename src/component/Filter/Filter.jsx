import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" onChange={onFilter} />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
