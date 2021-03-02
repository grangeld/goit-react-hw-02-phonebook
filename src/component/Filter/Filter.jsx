import PropTypes from 'prop-types';

const Filter = ({ onFilter, search }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="name"
        value={search}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
