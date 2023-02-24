import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SuccessModal = ({ isOpen, setIsOpen, data }) => {
  const handleClose = () => setIsOpen(false);
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modalDiv">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Registration successful!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Name: {data.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Email: {data.email}
        </Typography>
        <div className="modalButton">
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
