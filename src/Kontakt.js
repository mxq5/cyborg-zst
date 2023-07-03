import "./stylesheets/landing.css";

const Kontakt = () => {
  return (
    <>
      <div className="contentContainer fxc">
        <div className="contentDisplay contact">
          <div className="contactContainer">
            <h1 className="title">Kontakt</h1>
            <h2>Zespół Szkół Technicznych</h2>
            <h3>ul. Poznańska 43 Ostrów Wlkp.</h3>
            <h3>tel. 62 735 89 00</h3>
            <h3>Email: zstcyborg@gmail.com</h3>    
          </div>
          <div className="zstLogoContainer">
            <img src="https://bis.zst-ostrow.edu.pl/wp-content/uploads/2020/09/logo_zst_500x350-1.png" alt="Zespół Szkół Technicznych" className="promotionImages"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kontakt;
