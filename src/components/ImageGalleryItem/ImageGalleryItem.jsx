import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  openModal,
}) => {
  return (
    <li
      onClick={() => openModal({ largeImageURL, tags })}
      className={css.ImageGalleryItem}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
