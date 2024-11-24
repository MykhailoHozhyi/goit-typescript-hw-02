import css from './ImageModal.module.css';
import { BiLike } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import Modal from 'react-modal';
import { Image } from '../../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

type ImageModalProps = {
  isOpenModal: boolean;
  onCloseModal: () => void;
  modalData: Partial<Image>;
}

export default function ImageModal({ isOpenModal, onCloseModal, modalData }: ImageModalProps) {
  function onCloseImage(): void {
    onCloseModal();
  }

  function afterOpenModal(): void {
    document.body.style.overflow = 'hidden';
  }

  function afterCloseModal(): void {
    document.body.style.overflow = 'auto';
  }

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseImage}
      style={customStyles}
      onAfterOpen={afterOpenModal}
      onAfterClose={afterCloseModal}
    >
      <div className={css.modalBox}>
        <img
          className={css.modalImage}
          src={modalData.urls?.regular}
          alt={modalData.alt_description}
        />
        <ul className={css.modalImageInfo}>
          <li className={css.infoItem}>
            <div>
              <FaInstagram size={36} />
            </div>
            <p>{modalData.user?.instagram_username || 'No instagram'}</p>
          </li>
          <li className={css.infoItem}>
            <div>
              <MdDescription size={36} />
            </div>
            <p>{modalData.description}</p>
          </li>
          <li className={css.infoItem}>
            <div>
              <BiLike size={36} />
            </div>
            <p>{modalData.likes}</p>
          </li>
        </ul>
      </div>
    </Modal>
  );
}
