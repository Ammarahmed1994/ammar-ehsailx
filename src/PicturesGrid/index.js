import React from "react";
import ReactPaginate from "react-paginate";
import "./index.css";

export const PicturesGrid = ({
  pictures,
  skip,
  limit,
  pageCount,
  changePage,
}) => {
  return (
    <div>
      <div className="row">
        {pictures
          ? pictures.slice(skip, limit).map((picture) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div key={picture.date} className="card">
                  <img
                    src={picture.hdurl}
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
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={changePage}
        forcePage={skip !== undefined ? Math.ceil(skip / limit) : 0}
        containerClassName="paginationContainer"
        pageLinkClassName="paginationPageLink"
        previousLinkClassName="paginationPageLink"
        nextLinkClassName="paginationPageLink"
        activeLinkClassName="paginationActiveLink"
      />
    </div>
  );
};
