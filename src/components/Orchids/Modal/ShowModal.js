import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ShowModal.scss";

function ShowModal({ show, handleClose, selectedOrchid }) {
  return (
    <Modal show={show} onHide={handleClose} className="modal-custom">
      <Modal.Header closeButton>
        <h1>{selectedOrchid ? selectedOrchid.name : "Orchid Details"}</h1>
      </Modal.Header>
      <Modal.Body>
        {selectedOrchid ? (
          <div className="row">
            <div className="col-md-6 img-container">
              <img src={selectedOrchid.image} alt={selectedOrchid.name} className="img-fluid" />
            </div>
            <div className="col-md-6 content">
              <h2>{selectedOrchid.name}</h2>
              <p>
                <strong>Rating:</strong> {selectedOrchid.rating}✨
              </p>
              <p>
                <strong>Origin:</strong> {selectedOrchid.origin}
              </p>
              <p>
                <strong>Category:</strong> {selectedOrchid.category}
              </p>
              <p>
                <strong>Description:</strong> {selectedOrchid.description}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShowModal;
