import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getvgames from '../../actions/getvideogames';
import Vgcard from '../Vgcard/Vgcard';
import Paging from '../Paging/Paging';
import stl from '../HomePage/HomePage.module.css';
import genrefilter from '../../actions/genrefilter';
import vgorigin from '../../actions/vgorigin';
import sortvgames from '../../actions/sortvgames';
import SearchBar from '../SearchBar/SearchBar';

export default function HomePage() {
  const dispatch = useDispatch();
  const allVgames = useSelector((state) => state.videogames);
  const allgenres = useSelector((state) => state.genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [vgamesPerPage, setVgamesPerPage] = useState(15);
  const lastVgameIndex = currentPage * vgamesPerPage;
  const firstVgIndex = lastVgameIndex - vgamesPerPage;
  const currentVgames = allVgames.slice(firstVgIndex, lastVgameIndex);
  const [render, setRender] = useState('');

  useEffect(() => {
    dispatch(getvgames());
  }, [dispatch]);

  function handleGenreFilter(e) {
    e.preventDefault();
    dispatch(genrefilter(e.target.value));

  }

  function handleOriginFilter(e) {
    dispatch(vgorigin(e.target.value));

  }

  function handleShowAll(e) {
    dispatch(vgorigin('All'));
    dispatch(sortvgames('asc'));
    //  setCurrentPage(1);
  }

  function handleSortvgames(e) {
    e.preventDefault();
    dispatch(sortvgames(e.target.value));
    setRender(`Order ${e.target.value}`);
    //  setCurrentPage(1);
  }

  // Verificar si allVgames es un arreglo antes de llamar a sort()
  if (Array.isArray(allVgames)) {
    allVgames.sort();
  } else {
    return
  }

  return (
    <div className={stl.c1}>
      <h6>Home</h6>
      <h3>Explore the top-rated titles and stay on top of the ranking position of your favorite games. In addition, at Project Mundo Gamer you will be able to create your own games and share them with the largest community of players. Immerse yourself in an unparalleled gaming experience and become part of our passionate community at Project Mundo Gamer!</h3>
      <div className={stl.c2}>
        <div>
          <button className={stl.hpbot} onClick={handleShowAll}>
            All videogames
          </button>
        </div>
        <div>
          <Link to="/videogame">
            <button className={stl.hpbot}>Add New Videogame</button>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <select className={stl.hpfilter} onChange={handleGenreFilter}>
            {allgenres.sort().map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>
        <div>
          <select
            className={stl.hpfilter}
            onChange={handleSortvgames}
            onBlur={handleSortvgames}
          >
            <option value="asc">SORT</option>
            <option value="asc">Forward</option>
            <option value="desc">Backward</option>
            <option value="rating">Rating</option>
            <option value="date">Date</option>
          </select>
        </div>
        <div>
          <select className={stl.hpfilter} onChange={handleOriginFilter}>
            <option value="All">Api+DB Games</option>
            <option value="DB">Db Games</option>
            <option value="API">Api Games</option>
          </select>
        </div>
        <Link to="/">
          <button className={stl.hpbot}>Landingpage</button>
        </Link>
      </div>
      <div className={stl.c4}>
        <Paging
          vgamesPerPage={vgamesPerPage}
          allVgames={allVgames.length}
          currpage={currentPage}
          actualPage={setCurrentPage}
        />
      </div>
      <div className={stl.c5}>
        {Array.isArray(currentVgames) ? (
          currentVgames.map((p) => (
            <Fragment key={p.id}>
              <Link to={`/videogame/${p.id}`}>
                <Vgcard name={p.name} image={p.image} genres={p.genres} rating={p.rating} />
              </Link>
            </Fragment>
          ))
        ) : (
          <h3>Game not found</h3>
        )}
      </div>
    </div>
  );
}

