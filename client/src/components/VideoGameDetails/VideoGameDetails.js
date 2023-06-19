import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import getvgamebyid from '../../actions/getvgamebyid'; // Asumiendo que el archivo de acción se importa correctamente
import stl from './VideoGameDetails.module.css';

export default function VideoGameDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getvgamebyid(id));
  }, [dispatch, id]);

  const detail = useSelector((state) => state.videodetails);

  return (
    <div className={stl.wrapper}>
      <div className={stl.contarea}>
        <div className={stl.lineflex}>
        <h2>Details<br/><br/>{detail.name}</h2>
          <Link to="/home">
            <button className={stl.botback}>Home</button>
          </Link>
        </div>
        <img
          className={stl.detimg}
          src={detail.image}
          alt="No image found"
          width="250px"
          height="300px"
        />
        <h3>Description</h3>
        <h5>{detail.description}</h5>
        <div className={stl.lineflex}>
          <h3>{`Rating: ${detail.rating}`}</h3>
        </div>
        <div className={stl.lineflex}>
          <h3>{`Released date: ${detail.released}`}</h3>
        </div>
        <h3>{`Platforms: ${detail.platforms}`}</h3>
        <h3>{`Genres: ${detail.genres}`}</h3>
        <br/>
      </div>
    </div>
  );
}
