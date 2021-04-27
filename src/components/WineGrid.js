import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function WineGrid(props) {
  return (
    <div id="wineGrid">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Vineyard</th>
            <th>Year</th>
            <th>Bin</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.wines.map(wine => (
            <tr key={wine._id}>
              <td>
                <Link to={"/editwines/" + wine.slug}>{wine.name}</Link>
              </td>
              <td>{wine.vineyard}</td>
              <td>{wine.year}</td>
              <td>{wine.bin}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => props.deleteWine(wine._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

WineGrid.propTypes = {
  deleteWine: PropTypes.func.isRequired,
  wines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      vineyard: PropTypes.string,
      notes: PropTypes.string
    })
  )
};

export default WineGrid;
