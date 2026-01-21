function Modal({ handleOpenModal }) {
  return (
    <>
      <div className="modal-wrapper" onClick={handleOpenModal}></div>
      <div className="Modal">
        <div className="heading">
          <h3>Modal Heading</h3>
          <button className="buttonX" onClick={handleOpenModal}>
            X
          </button>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae
          ipsa omnis ex? Minima perspiciatis, iste et deleniti natus in eos ad
          quam, quas, reiciendis asperiores sequi a voluptatum eius.
        </div>
        <button onClick={() => handleOpenModal()}>Close</button>
      </div>
    </>
  );
}

export default Modal;
