import React from 'react';
import styles from './feed-modal.module.css';
import useFetch from '../../hooks/useFetch';
import Error from '../helper/error';
import Loading from '../Helper/Loading';
import { PHOTO_GET } from '../../api';
import PhotoContent from '../Photo/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;