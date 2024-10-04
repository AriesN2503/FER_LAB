import { ListOrchids } from "./ListOfOrchids";
import React from "react";
import { Link } from "react-router-dom";
import "./Orchids.scss";
import ShowModal from "./Modal/ShowModal";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Special() {
  const ListSpecialOrchids = ListOrchids.filter((orchid) => orchid.isSpecial);

  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (orchid) => {
    setSelectedOrchid(orchid);
    setShow(true);
  };

  return (
    <div className="content" style={{ paddingTop: "5rem" }}>
      <h1 className="text-center title">Special Orchids</h1>
      <div className="line"></div>
      <div className="row display-card">
        {ListSpecialOrchids.map((orchid) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 card1" key={orchid.Id}>
            <div className="card mb-4">
              <div className="card-img-top">
                <Button onClick={() => handleShow(orchid)} className="btn-modals">
                  <img src={orchid.image} alt={orchid.name} className="img-fluid" />
                </Button>
              </div>
              <div className="card-body">
                <div className="row infor">
                  <h5 className="card-title col-9">
                    {orchid.name}
                    {orchid.isSpecial ? " ⭐" : ""}
                  </h5>
                  <p className="card-text col-3 rating text-end">{orchid.rating}✨</p>
                </div>
                <p className="card-text origin">
                  <span>Origin:</span> {orchid.origin}
                </p>
                {/* Link with dynamic Id */}
                <Link to={`/details/${orchid.Id}`} className="btn">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        <ShowModal show={show} handleClose={handleClose} selectedOrchid={selectedOrchid} />
      </div>
    </div>
  );
}

export default Special;
