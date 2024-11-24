import { FormEvent } from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

type SearchBarProps = {
  onSubmit: (searchValue: string) => Promise<void>;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const form = event.currentTarget;
    const searchInput = form.elements.namedItem('searchValue') as HTMLInputElement;
    const searchValue = searchInput.value.trim();

    if (searchValue === '') {
      toast.error('Please enter search word!');
      return;
    }

    onSubmit(searchValue);
    form.reset();
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
