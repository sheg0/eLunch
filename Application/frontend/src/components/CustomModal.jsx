import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import Vegan from "../images/Vegan.png";
import Veggie from "../images/Veggie.png";
import Dairyfree from "../images/Dairyfree.png";
import Divider from "@mui/material/Divider";
import { MdDone, MdClear } from "react-icons/md";
import { LuShoppingBasket } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 6,
};

function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [buttonColors, setButtonColors] = useState({
    button1: "#C5C5C5",
    button2: "#C5C5C5",
    button3: "#C5C5C5",
    button4: "#C5C5C5",
    button5: "#C5C5C5",
  });

  const [isClicked, setIsClicked] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
    icon4: false,
    icon5: false,
  });

  const handleItAll = (buttonId) => {
    handleClick(buttonId);
    handleIconClick(buttonId);
  };

  const handleClick = (buttonId) => {
    const updatedButtonColors = { ...buttonColors };
    updatedButtonColors[buttonId] =
      updatedButtonColors[buttonId] === "#C5C5C5" ? "#043C5F" : "#C5C5C5";
    setButtonColors(updatedButtonColors);
  };

  const handleIconClick = (iconId) => {
    switch (iconId) {
      case "button1":
        let updatedValue = {};
        updatedValue = { icon1: !isClicked.icon1 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue,
        }));
        break;
      case "button2":
        let updatedValue2 = {};
        updatedValue2 = { icon2: !isClicked.icon2 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue2,
        }));
        break;
      case "button3":
        let updatedValue3 = {};
        updatedValue3 = { icon3: !isClicked.icon3 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue3,
        }));
        break;
      case "button4":
        let updatedValue4 = {};
        updatedValue4 = { icon4: !isClicked.icon4 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue4,
        }));
        break;
      case "button5":
        let updatedValue5 = {};
        updatedValue5 = { icon5: !isClicked.icon5 };
        setIsClicked((prevValue) => ({
          ...prevValue,
          ...updatedValue5,
        }));
        break;
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            sx={{
              position: "absolute",
              color: "black",
              top: "8px",
              left: "8px",
            }}
          >
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton
            sx={{
              position: "absolute",
              color: "black",
              top: "8px",
              left: "45px",
            }}
          >
            <DeleteIcon></DeleteIcon>
          </IconButton>

          <Typography
            sx={{
              color: "#898989",
              fontFamily: "Segoe UI",
              fontSize: "22px",
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Mittwoch - 22.11.
          </Typography>
          <IconButton
            sx={{
              position: "absolute",
              color: "black",
              top: "8px",
              right: "8px",
            }}
          >
            <CloseIcon onClick={handleClose}></CloseIcon>
          </IconButton>

          <Typography
            sx={{
              color: "#3F3F3F",
              fontFamily: "Segoe UI",
              fontSize: "16px",
              position: "absolute",
              left: "15px",
              margin: "15px",
              fontWeight: "400",
            }}
          >
            13:00
          </Typography>
          <Typography
            sx={{
              color: "#043C5F",
              fontFamily: "Segoe UI",
              fontSize: "16px",
              textAlign: "center",
              margin: "15px",
              fontWeight: "600",
            }}
          >
            Schupfnudel mit Kraut
            <IconButton
              sx={{
                position: "absolute",
                color: "black",
              }}
            >
              <InfoIcon
                sx={{
                  fontSize: "medium",
                }}
              ></InfoIcon>
            </IconButton>
          </Typography>
          <Container>
            <img src={Vegan} alt="Vegan" style={{ margin: "5px" }} />
            <img src={Veggie} alt="Veggie" style={{ margin: "5px" }} />
            <img src={Dairyfree} alt="Dairyfree" style={{ margin: "5px" }} />
            <div style={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "#3F3F3F",
                  fontSize: "16px",
                  fontFamily: "Segoe UI",
                  fontWeight: "600",
                  lineHeight: "240%",
                  wordWrap: "break-word",
                }}
              >
                Organisation: <br />
                Kochen: <br />
                Zugesagt: <br />
                Abgesagt:
              </Typography>
              <Container>
                <Typography
                  sx={{
                    color: "#3F3F3F",
                    fontSize: "16px",
                    fontFamily: "Segoe UI",
                    fontWeight: "400",
                    lineHeight: "240%",
                    wordWrap: "break-word",
                    textAlign: "left",
                  }}
                >
                  EB <br />
                  MKA SC <br />
                  EB MKA VS <br />
                  SC IS
                </Typography>
              </Container>
            </div>
          </Container>

          <Divider
            sx={{
              borderColor: "#898989",
              height: "5px",
              margin: "10px",
            }}
          />

          <IconButton
            onClick={() => handleItAll("button1")}
            style={{
              width: "66px",
              height: "30px",
              backgroundColor: buttonColors.button1,
              borderRadius: 8,
              left: "10px",
            }}
          >
            <MdDone style={{ color: isClicked.icon1 ? "white" : "black" }} />
          </IconButton>

          <IconButton
            onClick={() => handleItAll("button2")}
            style={{
              width: "66px",
              height: "30px",
              backgroundColor: buttonColors.button2,
              borderRadius: 8,
              left: "15px",
            }}
          >
            <MdClear style={{ color: isClicked.icon2 ? "white" : "black" }} />
          </IconButton>

          <IconButton
            onClick={() => handleItAll("button3")}
            style={{
              width: "66px",
              height: "30px",
              backgroundColor: buttonColors.button3,
              borderRadius: 8,
              left: "35px",
            }}
          >
            <PiCookingPot
              style={{ color: isClicked.icon3 ? "white" : "black" }}
            />
          </IconButton>

          <IconButton
            onClick={() => handleItAll("button4")}
            style={{
              width: "66px",
              height: "30px",
              backgroundColor: buttonColors.button4,
              borderRadius: 8,
              left: "40px",
            }}
          >
            <LuShoppingBasket
              style={{ color: isClicked.icon4 ? "white" : "black" }}
            />
          </IconButton>

          <IconButton
            onClick={() => handleItAll("button5")}
            style={{
              width: "66px",
              height: "30px",
              backgroundColor: buttonColors.button5,
              borderRadius: 8,
              left: "45px",
            }}
          >
            <IoPersonOutline
              style={{ color: isClicked.icon5 ? "white" : "black" }}
            />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}

export default CustomModal;
