import "./Info.css";
import Alcohol from "../../images/wine-bottle.png";
import Dairyfree from "../../images/milk-box.png";
import Glutenfree from "../../images/gluten-free.png";
import Meat from "../../images/meat.png";
import Vegan from "../../images/vegan.png";
import Veggie from "../../images/vegetarian.png";

function Info() {
  return (
    <div className="Info-Page-Container">
      <div className="Info-Page-Content">
        <p className="Info-Page-Headline">Informationen</p>

        <p className="Info-Page-Liste">
          <li>täglich Wasserspender desinfizieren und Auffangschale leeren</li>
          <li>bei Bedarf Kaffeeautomat reinigen und Auffangschale leeren</li>
          <li>Spülmaschine in der Regel nach dem Mittagessen laufen lassen</li>
          <li>14-tägig schauen was nachbestellt werden muss (Grundzutaten)</li>
          <li>
            Wenn ein Bedarf festgestellt wird, diesen im digitalen
            Einkaufszettel notieren
          </li>
          <li>monatlich Altglas entsorgen</li>
          <li>monatlich Oberflächen in der Küche gründlich renigen</li>
          <li>
            monatlich Inhalte der Kühlschränke prüfen und alte Sachen entsorgen
          </li>
          <li>quartalsweise Vorratsschrank putzen und neu einräumen</li>
          <li>
            2x im Jahr die Küche gründlich reinigen, auch auf den Schränken
          </li>
        </p>
      </div>

      <div className="Info-Page-Legend">
        <img
          className="Info-Page-Image"
          src={Alcohol}
          alt="Alcohol"
          title="Mit Alkohol"
        />
        <p className="Info-Page-ImageText">Mit Alkohol</p>
        <img
          className="Info-Page-Image"
          src={Dairyfree}
          alt="Dairyfree"
          title="Laktosefrei"
        />
        <p className="Info-Page-ImageText">Laktosefrei</p>
        <img
          className="Info-Page-Image"
          src={Glutenfree}
          alt="Glutenfree"
          title="Glutenfrei"
        />
        <p className="Info-Page-ImageText">Glutenfrei</p>
        <img
          className="Info-Page-Image"
          src={Meat}
          alt="Meat"
          title="Mit Fleisch"
        />
        <p className="Info-Page-ImageText">Mit Fleisch</p>
        <img
          className="Info-Page-Image"
          src={Vegan}
          alt="Vegan"
          title="Vegan"
        />
        <p className="Info-Page-ImageText">Vegan</p>
        <img
          className="Info-Page-Image"
          src={Veggie}
          alt="Veggie"
          title="Vegetarisch"
        />
        <p className="Info-Page-ImageText">Vegetarisch</p>
      </div>
      <div className="InfoPage-Footer">
        <div>
          <h2 className="InfoPage-Footer-Headline">Hier finden Sie uns</h2>
          <p className="InfoPage-Text">
            Steinbeis Systems Technology Group <br />
            Martinstraße 42-44 <br /> D-73728 Esslingen
          </p>
        </div>
        <div>
          <h2 className="InfoPage-Footer-Headline">Nehmen Sie Kontakt auf</h2>
          <p className="InfoPage-Text">
            Telefon: +49 711 99596-300 <br />
            Fax: +49 711 99596-301 <br />
            Email: info@steinbeis-stg.de
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
