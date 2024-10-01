import { ListOrchids } from "./ListOfOrchids";
import React from "react";
import { Link } from "react-router-dom";
import "./Orchids.scss";

function Special() {
  const ListSpecialOrchids = ListOrchids.filter((orchid) => orchid.isSpecial);

  return (
    <div className="content" style={{ paddingTop: "5rem" }}>
      <h1 className="text-center title">Special Orchids</h1>
      <div className="line"></div>
      <div className="row display-card">
        {ListSpecialOrchids.map((orchid) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 card1" key={orchid.Id}>
            <div className="card mb-4">
              <div className="card-img-top">
                <img src={orchid.image} alt={orchid.name} className="img-fluid" />
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
      </div>
    </div>
  );
}

export default Special;
