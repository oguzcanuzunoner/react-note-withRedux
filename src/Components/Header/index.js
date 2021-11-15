import { useState } from 'react';
import Style from './style.module.css';
import { useDispatch } from 'react-redux';
import { searchFilter } from '../../redux/notes/notesSlice';

const Header = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchFilter(search));
    setSearch('');
  };

  return (
    <div>
      <h1 style={{ color: '#717171' }}>NotesApp</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={Style.input}
        />
        <input
          type="submit"
          className={Style.button}
          value="Search / Show All"
        />
      </form>
    </div>
  );
};

export default Header;
