import "./stylesheets/landing.css";

import poster from "./assets/cyborg_poster.webp";


const Poster = () => {
  return (
    <>
      <div className="contentContainer fxc">
        <div className="contentDisplay poster">
          <div>
            <img src={poster} alt="Plakat" className="promotionImages"/>
          </div> 
          <div>
            <h1>Plakat Cyborg 2022</h1>
            <p>Plakat dostępny do pobrania</p>
            <p className="downloadlink">
              <a href={poster} download>
                [ Pobierz ]
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Poster;
