import React, { useState } from "react";
import "./MealInfo.css";

const MealInfo = ({ onClose }) => {
  const [isModal, notModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="testHeader">
      <div className="secondModalContent">
        <h1>Gerichtinformationen</h1>
        <button className="closeBtn" onClick={onClose}>
          {" "}
          close
        </button>
      </div>
    </div>
  );
};

export default MealInfo;
