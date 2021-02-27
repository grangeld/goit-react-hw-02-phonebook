const Filter = ({ onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="name" onChange={onFilter} />
    </label>
  );
};

export default Filter;
