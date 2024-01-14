import "./Info.css";
import Alcohol from "../../images/Alcohol.png";
import Dairyfree from "../../images/Dairyfree.png";
import Glutenfree from "../../images/Glutenfree.png";
import Meat from "../../images/Meat.png";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";

function Info() {
  return (
    <>
      <div className="Infp-Container">
        <h1 className="Info-Headline"> Informationen </h1>
        <div className="Info-Content">
          <div className="Info-Row">
            <ul className="Info-Liste">
              <li>
                Täglich Wasserspender desinfizieren und Auffangschale leeren
              </li>
              <li>
                Bei Bedarf Kaffeeautomat reinigen und Auffangschale leeren
              </li>
              <li>
                Spülmaschine in der Regel nach dem Mittagessen laufen lassen
              </li>
              <li>
                14-tägig schauen was nachbestellt werden muss (Grundzutaten)
              </li>
              <li>
                Wenn ein Bedarf festgestellt wird, diesen im digitalen
                Einkaufszettel notieren
              </li>
              <li> Monatlich Altglas entsorgen</li>
              <li> Monatlich Oberflächen in der Küche gründlich renigen</li>
              <li>
                Monatlich Inhalte der Kühlschränke prüfen und alte Sachen
                entsorgen
              </li>
              <li>Quartalsweise Vorratsschrank putzen und neu einräumen</li>
              <li>
                2x im Jahr die Küche gründlich reinigen, auch auf den Schränken
              </li>
            </ul>
            <div className="Info-Legend">
              <img
                className="Info-Image"
                src={Alcohol}
                alt="Alcohol"
                title="Mit Alkohol"
              />
              <img
                className="Info-Image"
                src={Dairyfree}
                alt="Dairyfree"
                title="Laktosefrei"
              />
              <img
                className="Info-Image"
                src={Glutenfree}
                alt="Glutenfree"
                title="Glutenfrei"
              />
              <img
                className="Info-Image"
                src={Meat}
                alt="Meat"
                title="Mit Fleisch"
              />
              <img
                className="Info-Image"
                src={Vegan}
                alt="Vegan"
                title="Vegan"
              />
              <img
                className="Info-Image"
                src={Veggie}
                alt="Veggie"
                title="Vegetarisch"
              />
            </div>
          </div>
        </div>
        <div className="Info-Footer">
          <div className="Info-Column">
            <h2 className="Info-Footer-Headline">Hier finden Sie uns</h2>
            <p className="Info-Text">
              Steinbeis Systems Technology Group <br />
              Martinstraße 42-44 <br /> D-73728 Esslingen
            </p>
          </div>
          <div className="Info-Column">
            <h2 className="Info-Footer-Headline">Nehmen Sie Kontakt auf</h2>
            <p className="Info-Text">
              Telefon: +49 711 99596-300 <br />
              Fax: +49 711 99596-301 <br />
              Email: info@steinbeis-stg.de
            </p>
          </div>
        </div>
        <div className="Verewigung">
          Diese Website wurde von Esra Balci, Vivian Schmiss, Imran-Nur-Reyhan
          Sevinc, M. Kaan Asik und Selim Cetin erstellt
        </div>
      </div>
    </>
  );
}

export default Info;
