import React, { useState } from "react";
import type { UploadProps } from "antd";
import { Upload, message, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const UploadFile = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [file, setFile] = useState<String>("");
  const handleChange = (value: String) => {
    setFile(value);
    setModal(true);
  };

  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    beforeUpload(file) {
      if (!(file.name.endsWith(".xlsx") || file.name.endsWith(".csv"))) {
        message.error(`${file.name} is not a excel or csv file`);
        return Upload.LIST_IGNORE;
      }
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new FormData();
        data.append("file", file, file.name); // console.log(files) on server side
        //   const response = await fetch("/api/upload-data", {
        //     method: "POST",
        //     body: data,
        //   });
        //   if (response.ok === true) {
        //     message.success(`file uploaded successfully\n Skillset Validation Started`);
        //   } else {
        //     const {data} = await response.json()
        //     message.error(`${data}`);
        //   }
        console.log(file);
        setModal(false);
      };
      reader.readAsText(file);
      return false;
    },
  };
  return (
    <>
      <Select
        defaultValue="File Format"
        onChange={handleChange}
        bordered={false}
        className="profile"
        options={[
          { value: "excel", label: "Excel" },
          { value: "csv", label: "CSV" },
        ]}
      />
      {modal && (
        <Dragger {...props} style={{ padding: "10px" }}>
          <p className="ant-upload-drag-icon" style={{ marginTop: "30px" }}>
            <InboxOutlined />
          </p>
          <p style={{ marginTop: "30px" }}>
            Click or drag file to this area to upload
          </p>
          <p
            style={{ fontSize: "10px", color: "#777", margin: "10px 0 30px 0" }}
          >
            Support for a single upload
          </p>
        </Dragger>
      )}
    </>
  );
};
export default UploadFile;
