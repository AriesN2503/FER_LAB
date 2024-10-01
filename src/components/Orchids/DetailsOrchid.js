import React from "react";
import { ListOrchids } from "./ListOfOrchids";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./DetailsOrchid.scss";

function Details() {
  const { id } = useParams();
  const orchid = ListOrchids.find((item) => item.Id === id);
  const [showVideo, setShowVideo] = useState(false);

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
              <button className="video-btn" onClick={() => setShowVideo(!showVideo)}>
                {showVideo ? "Hide Video" : "Show Video"}
              </button>
              {showVideo && (
                <div className="video-container">
                  <button className="close-button" onClick={() => setShowVideo(false)}>
                    ✖
                  </button>
                  <iframe width="560" height="315" src={orchid.videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
