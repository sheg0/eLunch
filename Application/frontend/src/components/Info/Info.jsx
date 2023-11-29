import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";
import "./Info.css";
import Typography from "@mui/material/Typography";
import { PiParagraph } from "react-icons/pi";
import Alcohol from "../../images/Alcohol.png";
import Dairyfree from "../../images/Dairyfree.png";
import Glutenfree from "../../images/Glutenfree.png";
import Meat from "../../images/Meat.png";
import Vegan from "../../images/Vegan.png";
import Veggie from "../../images/Veggie.png";

function Info() {
  return (
    <Container>
      <div className="content">
        <Typography
          sx={{
            color: "#043C5F",
            fontFamily: "Segoe UI",
            fontSize: "40px",
            margin: "10px",
            fontWeight: "500",
          }}
        >
          Informationen
        </Typography>

        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "large",
            textAlign: "left",
            lineHeight: "2",
            margin: "2.5vh",
          }}
        >
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
        </Typography>
      </div>

      <div className="legend">
        <img className="infoImg" src={Alcohol} alt="Alcohol" />
        <p className="imgText">Mit Alkohol</p>
        <img className="infoImg" src={Dairyfree} alt="Dairyfree" />
        <p className="imgText">Laktosefrei</p>
        <img className="infoImg" src={Glutenfree} alt="Glutenfree" />
        <p className="imgText">Glutenfrei</p>
        <img className="infoImg" src={Meat} alt="Meat" />
        <p className="imgText">Mit Fleisch</p>
        <img className="infoImg" src={Vegan} alt="Vegan" />
        <p className="imgText">Vegan</p>
        <img className="infoImg" src={Veggie} alt="Veggie" />
        <p className="imgText">Veggie</p>
      </div>
      <div className="footer">
        <div>
          <h2 style={{ color: "#759ACB", fontFamily: "Segoe UI" }}>
            Hier finden Sie uns
          </h2>
          <p style={{ fontFamily: "Segoe UI" }}>
            Steinbeis Systems Technology Group <br />
            Martinstraße 42-44 <br /> D-73728 Esslingen
          </p>
        </div>
        <div>
          <h2
            style={{
              color: "#759ACB",
              fontFamily: "Segoe UI",
            }}
          >
            Nehmen Sie Kontakt auf
          </h2>
          <p style={{ fontFamily: "Segoe UI" }}>
            Telefon: +49 711 99596-300 <br />
            Fax: +49 711 99596-301 <br />
            Email: info@steinbeis-stg.de
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Info;
