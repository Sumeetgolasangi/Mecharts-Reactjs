import React, { useState } from "react";
import "./header.css";
import { Card, Select, Modal } from "antd";
import { SlackOutlined, CloudUploadOutlined } from "@ant-design/icons";
import UploadFile from "./upload";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<String>("");
  const [modal, setModal] = useState<boolean>(false);

  const handleChange = (value: String) => {
    setProfile(value);
    if (value === "login") {
      navigate("/login");
    }
  };
  const handleUploadModal = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const modalObj: any = {
    open: modal,
  };
  return (
    <div className="header-container">
      <Card className="card-container">
        <div className="card-maindiv">
          <div className="card-maindiv-right">
            <div className="logo">
              <SlackOutlined />
            </div>
            <div className="name">MeCharts</div>
          </div>
          <div className="card-maindiv-left">
            <div className="upload" onClick={handleUploadModal}>
              Upload <CloudUploadOutlined />
            </div>
            <div>
              <Select
                defaultValue="Sumeet G"
                onChange={handleChange}
                bordered={false}
                className="profile"
                options={[
                  { value: "user", label: "Sumeet G" },
                  { value: "my_profile", label: "My Profile" },
                  { value: "login", label: "Login     ", disabled: false },
                  { value: "logout", label: "Logout", disabled: true },
                ]}
              />
            </div>
          </div>
        </div>
      </Card>
      <Modal
        title="Upload File"
        open={modal}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <UploadFile />
      </Modal>
    </div>
  );
}

export default Header;
