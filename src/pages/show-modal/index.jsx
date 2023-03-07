import React, { useState } from "react";
import ModalDialog from "../../components/modal/index.jsx";
import { Button, Modal } from "antd";

const ShowModal = () => {
  const [openModal, setOpenModal] = useState({
    modal: false,
    info: false,
    warning: false,
    error: false,
  });
  const handleClose = () => {
    setOpenModal({});
  };
  const handleOk = () => {
    setOpenModal({});
  };

  return (
    <div>
      <Button
        onClick={() => {
          setOpenModal({ modal: true });
        }}
      >
        modal
      </Button>
      <ModalDialog
        handlerColse={handleClose}
        handlerOk={handleOk}
        show={openModal.modal}
      >
        basic modal
      </ModalDialog>
      {/* -------------------------------------------------------- */}
      <Button
        onClick={() => {
          setOpenModal({ info: true });
        }}
      >
        info modal
      </Button>
      <ModalDialog
        handlerColse={handleClose}
        handlerOk={handleOk}
        show={openModal.info}
      >
        info modal
      </ModalDialog>
      {/* --------------------------------------------------------- */}

      <Button
        onClick={() => {
          setOpenModal({ warning: true });
        }}
      >
        warning modal
      </Button>
      <ModalDialog
        handlerColse={handleClose}
        handlerOk={handleOk}
        show={openModal.warning}
      >
        warning modal
      </ModalDialog>
      {/* --------------------------------------------------------- */}

      <Button
        onClick={() => {
          setOpenModal({ error: true });
        }}
      >
        error modal
      </Button>
      <ModalDialog
        handlerColse={handleClose}
        handlerOk={handleOk}
        show={openModal.error}
      >
        error modal
      </ModalDialog>
      {/* --------------------------------------------------------- */}
    </div>
  );
};

export default ShowModal;
