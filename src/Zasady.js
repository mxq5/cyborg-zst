import "./stylesheets/landing.css";

const Zasady = () => {
  return (
    <>
      <div className="contentContainer fxc">
        <div className="contentDisplay around">
          <h1 className="title">Zasady oceniania</h1>
          Celem konkursu jest wykonanie aplikacji w dowolnej technologii, z uwzględnieniem interfeju graficznego użytkownika, którego celem jest popularyzacja fizyki. Aplikacja może symulować zjawiska fizyczne, rozwiązywać zadania, pełnić rolę programu dydaktycznego z fizyki, przeliczników jednostek, tablic fizycznych, testów, wzorów itp. Liczy się pomysł i wykonanie. Aplikacje konkursowe należy wykonać samodzielnie bądź w zespołach dwuosobowych. Prace konkursowe będą oceniane na podstawie:

          <ul>
            <li>zawartości fizycznej i naukowej,</li>
            <li>walorów rozrywkowych i potencjału dla popularyzacji fizyki,</li>
            <li>walorów technicznych,</li>
            <li>łatwości instalacji i sposobie dytrybucji,</li>
            <li>dokumentacji lub wbudowanej intrukcji dla użytkownika.</li>
          </ul>

          Do oceny należy dostarczyć na nośniku plik/pliki uruchomieniowe aplikacji, instrukcję uruchomienia aplikacji, kod źródłowy aplikacji, mail kontaktowy(w przypadku problemów z uruchomieniem aplikacji).
        </div>
      </div>
    </>
  );
}

export default Zasady;
