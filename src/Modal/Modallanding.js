import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

function ModalLanding() {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="modalContainer">
      <div>
        <button onClick={() => handleOpenModal()}>Open Modal</button>
      </div>
      {showModal && (
        <div>
          <Modal handleOpenModal={handleOpenModal} />
        </div>
      )}
    </div>
  );
}

export default ModalLanding;
