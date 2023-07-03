import "./stylesheets/landing.css";

const Landing = () => {
  return (
    <>
      <div className="contentContainer fxc">
        <div className="contentDisplay around">
          <h1 className="title">Cyborg _</h1>
          <h2>Konkurs przeznaczony dla uczniów szkół podstawowych</h2>
          <p className="textwall">W Zespole Szkół Technicznych od lat uczniowie rywalizują w konkursie "Cyborg". Celem konkursu jest wykonanie aplikacji w dowolnej technologii, z uwzględnieniem interfejsu graficznego użytkownika, którego celem jest popularyzacja fizyki. Aplikacja może symulować zjawiska fizyczne, rozwiązywać zadania, pełnić rolę programu dydaktycznego z fizyki, przeliczników jednostek, tablic fizycznych, testów, wzorów itp. Liczy się pomysł i wykonanie. Aplikacje konkursowe należy wykonać samodzielnie bądź w zespołach dwuosobowych. Zapraszamy do wzięcia udziału w konkursie.</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
