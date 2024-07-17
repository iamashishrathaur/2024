import ModalImage from 'react-modal-image';

const ImageWithModal = ({ src, alt }) => {
  return (
    <div>
      <ModalImage
        small={src}
        large={src}
        alt={alt}
        className="w-20 h-auto rounded bg-none"
      />
    </div>
  );
};

export default ImageWithModal;
