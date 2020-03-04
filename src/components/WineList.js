import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { createSlug } from "../utils";

function WineList(props) {
  return (
    <div className="container">
      <center>
        <h1>Wine List</h1>
      </center>
      <div className="card text-white bg-primary mb-3">
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      {props.wines.map(wine => (
        <div key={wine._id} className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={
                  "https://www.drinks.ng/wp-content/uploads/2017/03/Wine-Terms.jpg"
                }
                className="card-img"
                alt={"Wines, Glasses, and Grapes"}
              />
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body-wine card-wine" key={wine._id}>
                  <div className="card-title">
                    <h5 className="card-title">
                      <Link to={"/editwines/" + wine.slug}>{wine.name}</Link>
                      {/* <a href={wine.links.self}>{wine.name}</a> */}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {/* <a
                        href={wine.links.FilterByThisVineyard}
                        target="_blank"
                        rel="noopener noreferrer"
                      > */}
                      {/* {wine.vineyard}
                      </a> */}
                      {wine.vineyard}
                    </h6>
                    <p className="card-text">{wine.notes}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => props.deleteWine(wine._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

WineList.propTypes = {
  deleteWine: PropTypes.func.isRequired,
  wines: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      vineyard: PropTypes.string,
      slug: PropTypes.string,
      notes: PropTypes.string
    })
  )
};

export default WineList;
