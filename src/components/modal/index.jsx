import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

const ModalDialog = ({ children }) => {
  const [modal, setModal] = useState(false);
  return (
    <Space wrap>
      <Button
        onClick={() => {
          setModal(!modal);
        }}
      >
        جزئیات
      </Button>
      <Modal
        open={modal}
        onCancel={() => {
          setModal(false);
        }}
        onOk={() => {
          setModal(false);
        }}
      >
        {children}
      </Modal>
    </Space>
  );
};

export default ModalDialog;
