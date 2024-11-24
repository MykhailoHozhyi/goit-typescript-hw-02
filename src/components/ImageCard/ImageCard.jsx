import css from './ImageCard.module.css';

export default function ImageCard({ image, onOpenModal }) {
  function onClickImage() {
    onOpenModal(image);
  }

  return (
    <>
      <img
        className={css.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClickImage}
      />
    </>
  );
}
