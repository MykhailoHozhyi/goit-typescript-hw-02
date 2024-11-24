import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target.elements.searchValue.value.trim();

    if (searchValue === '') {
      toast.error('Please enter search word!');
      return;
    }

    onSubmit(searchValue);
    event.target.reset();
  }

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="searchValue"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
}
