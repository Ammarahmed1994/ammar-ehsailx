import React from "react";
import "./index.css";

export const PicturesGrid = ({ pictures }) => {
  return (
    <div className="container">
    <div className="row">
      {pictures
        ? pictures.map((picture) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div key={picture.date} className="card rounded">
                <img
                  src={picture.url}
                  className="card-img-top"
                  alt={picture.title}
                />
                <div className="card-body">
                  <div className="row">
                  <h5 className="card-title col-lg-7">{picture.title}</h5>
                  <p className="card-text col-lg-5">{picture.copyright}</p>
                  </div>
                  <p className="date">{picture.date}</p>
                </div>
              </div>
            </div>
          ))
        : ``}
    </div>
    </div>
  );
};
