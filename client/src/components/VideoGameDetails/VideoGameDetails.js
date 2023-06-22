import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import getvgamebyid from '../../actions/getvgamebyid';
import stl from './VideoGameDetails.module.css';

export default function VideoGameDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getvgamebyid(id));
  }, [dispatch, id]);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const detail = useSelector((state) => state.videodetails);

  const handleShowFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleHomeClick = () => {
    dispatch(getvgamebyid(null)); // Limpia los detalles del juego en el estado
  };

  // Verifica si no hay detalles de juego cargados
  if (!detail.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className={stl.wrapper}>
      <div className={stl.contarea}>
        <div className={stl.lineflex}>
          <h2>
            Details
            <br />
            <br />
            {detail.name}
          </h2>
          <Link to="/home">
            <button className={stl.botback} onClick={handleHomeClick}>
              Home
            </button>
          </Link>
        </div>
        <img
          className={stl.detimg}
          src={detail.image}
          alt="No image found"
          width="500px"
          height="300px"
        />
        <h3>Description</h3>
        {showFullDescription ? (
          <h5>{detail.description}</h5>
        ) : (
          <h5>
            {detail.description && detail.description.substring(0, 200)}
            {detail.description && detail.description.length > 200 && (
              <span  className={stl.showMore} onClick={handleShowFullDescription}>
                {' '}
                ...
              </span>
            )}
          </h5>
        )}
        <div className={stl.lineflex}>
          <h3>{`Rating:⭐ ${detail.rating}`}</h3>
        </div>
        <div className={stl.lineflex}>
          <h3>{`Released date 📅: ${detail.released}`}</h3>
        </div>
        <h3>{`Platforms 🎮: ${detail.platforms}`}</h3>
        <h3>{`Genres 🎯: ${detail.genres}`}</h3>
        <br />
      </div>
    </div>
  );
}
