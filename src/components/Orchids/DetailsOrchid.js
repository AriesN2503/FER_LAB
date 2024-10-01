import React from "react";
import { ListOrchids } from "./ListOfOrchids";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./DetailsOrchid.scss";

function Details() {
  const { id } = useParams();
  const orchid = ListOrchids.find((item) => item.Id === id);

  if (!orchid) {
    return <div className="container text-center mt-5">No Details found!</div>;
  }

  return (
    <div className="orchid-details">
      <div className="container">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-6 img-container">
              <img src={orchid.image} alt={orchid.name} />
            </div>
            <div className="col-md-6 content">
              <div className="title">
                <h1>
                  {orchid.name} {orchid.isSpecial && <span>⭐</span>}
                </h1>
              </div>
              <p>
                <strong>Rating:</strong> {orchid.rating}✨
              </p>
              <p>
                <strong>Origin:</strong> {orchid.origin}
              </p>
              <p>
                <strong>Category:</strong> {orchid.category}
              </p>
              <p className="des">
                <strong>Description:</strong> {orchid.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
