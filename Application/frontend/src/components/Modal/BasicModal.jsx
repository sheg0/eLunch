import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50vh",
  left: "100vh",
  transform: "translate(-30vh, -30vh)",
  minWidth: "50vh",
  width: "auto",
  bgcolor: "background.paper",
  borderRadius: "2vh",
  p: "3vh",
};

export const BasicModal = ({ isOpen, setIsOpen, children }) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
};
