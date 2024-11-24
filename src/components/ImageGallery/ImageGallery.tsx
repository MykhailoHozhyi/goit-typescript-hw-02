import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { Image } from '../../types';

type ImageGalleryProps = {
  gallery: Image[];
  onOpenModal: (image: Image) => void;
}

export default function ImageGallery({ gallery, onOpenModal }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {gallery.map(image => (
        <li className={css.galleryCard} key={image.id}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
}
