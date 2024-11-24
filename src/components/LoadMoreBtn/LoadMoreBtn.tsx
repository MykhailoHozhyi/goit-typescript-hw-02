import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onClick: (searchValue: string, page: number) => Promise<void>;
  page: number;
  searchValue: string;
}

export default function LoadMoreBtn({ onClick, page, searchValue }: LoadMoreBtnProps) {
  function handleLoadMore(): void {
    onClick(searchValue, page);
  }

  return (
    <button className={css.loadMoreBtn} onClick={handleLoadMore} type="button">
      Load more
    </button>
  );
}
