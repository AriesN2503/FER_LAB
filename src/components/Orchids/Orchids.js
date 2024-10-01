import "./Orchids.scss";
import { ListOrchids } from "./ListOfOrchids";
import React from "react";
import banner from "../../assets/Orchids_Banner.png";
import { Link } from "react-router-dom";

function Orchids() {
  return (
    <div className="content">
      <div className="banner-container">
        <img src={banner} alt="banner" className="banner" />
      </div>
      <h1 className="text-center title">All Orchids</h1>
      <div className="line"></div>
      <div className="row display-card">
        {ListOrchids.map((orchid) => (
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

export default Orchids;
