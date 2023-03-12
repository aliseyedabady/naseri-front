import React, { useState } from "react";
import ModalDialog from "../../components/modal/index.jsx";
import { Button, Modal } from "antd";
import Icon, { CheckCircleOutlined } from "@ant-design/icons";
import "../../assets/styles/custom.scss";

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
        <div className="main-card">
          <div className="card">
            <div className="title-row">
              <div>
                <CheckCircleOutlined
                  className="icon"
                  style={{ fontSize: "30px" }}
                />
              </div>
              <div className="title-text">با موفقیت انجام شد</div>
            </div>
            <div>
              کابر جدید با موفقیت اضافه شد
            </div>
          </div>
        </div>
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
