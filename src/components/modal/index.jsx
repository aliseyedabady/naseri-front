import React, { useState } from "react";
import { Button, Modal, Space } from "antd";

const ModalDialog = ({ children, show, handlerColse, handlerOk }) => {
  const [modal, setModal] = useState(false);

  return (
    <Space wrap>
      <Modal open={show} onCancel={handlerColse} onOk={handlerOk}>
        {children}
      </Modal>
    </Space>
  );
};

export default ModalDialog;
