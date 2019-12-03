import React from 'react';


function WineGrid(data) {
  return (

    <div id="wineGrid">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Vineyard</th>
            <th>Year</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default WineGrid;

