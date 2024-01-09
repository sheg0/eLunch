import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross1 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50vh",
  left: "100vh",
  transform: "translate(-30vh, -30vh)",
  minWidth: "50vh",
  width: "auto",
  bgcolor: " #f1f1f1",
  borderRadius: "2vh",
  p: "2vh",
};

export const BasicModal = ({ isOpen, setIsOpen, children }) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button className="CloseModalButton" onClick={toggleModal}>
            <RxCross1 />
          </button>

          {children}
        </Box>
      </Modal>
    </div>
  );
};