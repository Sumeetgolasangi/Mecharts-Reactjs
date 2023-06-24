import React, { useState ,useEffect} from "react";
import "./header.css";
import { Card, Select, Modal } from "antd";
import { SlackOutlined, CloudUploadOutlined } from "@ant-design/icons";
import UploadFile from "./upload";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<String>("");
  const [modal, setModal] = useState<boolean>(false);
  const [users, setUsers] = useState<any>();
  const handleChange = (value: String) => {
    setProfile(value);
    if (value === "logout") {
      sessionStorage.removeItem("user")
      sessionStorage.removeItem("token")
      navigate("/login");
    }
  };
  const handleUploadModal = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
  };
  const handlehomebutton = () =>{
    navigate("/")
  }
  useEffect(()=>{
    const data:any=sessionStorage.getItem("user")
    setUsers(JSON.parse(data))
  },[])
  
  return (
    <div className="header-container">
      <Card className="card-container">
        <div className="card-maindiv">
          <div className="card-maindiv-right">
            <div className="logo" onClick={handlehomebutton}>
              <SlackOutlined />
            </div>
            <div className="name" onClick={handlehomebutton}>MeCharts</div>
          </div>
          <div className="card-maindiv-left">
            <div className="upload" onClick={handleUploadModal}>
              Upload <CloudUploadOutlined />
            </div>
            <div>
              <Select
                defaultValue={users?users.name:"user"}
                onChange={handleChange}
                bordered={false}
                className="profile"
                options={[
                  { value: "user", label: (users?users.name:"user") },
                  { value: "my_profile", label: "My Profile" },
                  { value: "login", label: "Login     ", disabled: true  },
                  { value: "logout", label: "Logout", disabled: false },
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
