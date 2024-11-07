import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ActivityForm = ({
  showModal,
  setShowModal,
  addTodo,
  input,
  handleInputChange,
  description,
  handleDescriptionChange,
}) => {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const handleClose = () => {
    setShowModal(false);
    // setTitle("");
    // setDescription("");
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={addTodo}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <Button variant="primary" onClick={handleClose} type="submit">
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ActivityForm;
