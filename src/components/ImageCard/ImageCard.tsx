import { Image } from '../../types';
import css from './ImageCard.module.css';

type ImageCardProps = {
  image: Image;
  onOpenModal: (image: Image) => void;
}

export default function ImageCard({ image, onOpenModal }: ImageCardProps) {
  function onClickImage(): void {
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
