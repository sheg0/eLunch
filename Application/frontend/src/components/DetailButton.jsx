import { IconButton } from "@mui/material";
import { useState } from "react";

function DetailButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <IconButton
      onClick={handleButtonClick}
      style={{
        width: "66px",
        height: "30px",
        backgroundColor: isClicked ? "#043C5F" : "#C5C5C5",
        borderRadius: 8,
        margin: "10px",
      }}
    ></IconButton>
  );
}

export default DetailButton;
