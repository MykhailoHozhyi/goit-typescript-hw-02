import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import { fetchGallery } from '../../gallery-api';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from '../../types';

export default function App() {
  const [gallery, setGallery] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Partial<Image>>({});

  async function handleSearch(searchValue: string, page = 1): Promise<void> {
    try {
      setError(false);
      setLoading(true);

      if (page === 1) {
        setGallery([]);
        setSearchValue(searchValue);
      }

      const galleryData = await fetchGallery(searchValue, page);
      const galleryResults: Image[] = galleryData.results;
      setTotalPages(galleryData.total_pages);

      if (page > 1) {
        setGallery(prevPage => {
          return [...prevPage, ...galleryResults];
        });
      } else {
        setGallery(galleryResults);
      }

      setCurrentPage(page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function onOpenModal(imageData: Image): void {
    setIsOpenModal(true);
    setModalData(imageData);
  }

  function onCloseModal(): void {
    setIsOpenModal(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {gallery.length > 0 && (
        <ImageGallery gallery={gallery} onOpenModal={onOpenModal} />
      )}

      {gallery.length > 0 && !loading && currentPage < totalPages && (
        <LoadMoreBtn
          onClick={handleSearch}
          page={currentPage}
          searchValue={searchValue}
        />
      )}

      {loading && <Loader />}

      {isOpenModal && (
        <ImageModal
          isOpenModal={isOpenModal}
          onCloseModal={onCloseModal}
          modalData={modalData}
        />
      )}
    </>
  );
}
