import React from 'react';


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
          </tr>
        </thead>
        <tbody>
        {props.wines.map(wine => (
          <tr key={wine._id}>
            <td>{wine.name}</td>
            <td>{wine.vineyard}</td>
            <td>{wine.year}</td>
            <td>{wine.bin}</td>
          </tr>
          ))}
        </tbody>
      </table>
        
    </div>

    )
}

export default WineGrid;

