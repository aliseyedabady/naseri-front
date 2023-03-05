import { Button, Form, Input, Popconfirm, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import "../../assets/styles/custom.scss";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("ذخیره با خطا مواجه شد:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} الزامی می‌باشد`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User",
    name: record.name,
  }),
};

const TableUser = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      id: "12",
      name: "عرفان قرچه بیدختی",
      address: "امین اسلامی ۱۶",
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = key => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "id",
      dataIndex: "id",
      width: "5%",
      editable: true,
    },
    {
      title: "کاربر",
      dataIndex: "name",
      width: "30%",
      editable: true,
    },
    {
      title: "آدرس",
      dataIndex: "address",
      editable: true,
    },
    {
      title: "عملیات‌ها",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="آیا مطمئن هستید که میخواهید کاربر را حذف کنید؟"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>حذف کاربر</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      id: ``,
      name: ``,
      address: ``,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = row => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        title={() => <div>search bar , filters</div>}
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
      />
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        اضافه کردن کاربر
      </Button>
    </div>
  );
};
export default TableUser;
