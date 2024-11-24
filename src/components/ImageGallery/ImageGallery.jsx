import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ gallery, onOpenModal }) {
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
