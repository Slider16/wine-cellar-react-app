import React from 'react';
import NavBar from "./NavBar";
// import { ReactComponent } from '*.svg';
// import "../styles/AddEditWineForm.css"


class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wines: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:5000/api/wines')
            .then(res => res.json())
            .then((data) => {
                this.setState({ wines: data })
            })
            .catch(console.log)
    }
    handleDeletWine(_id) {
        const options = {
            method: 'DELETE'
        }
        fetch(`http://localhost:5000/api/wines/${_id}`, options)
            .then(res => res.json())
            .then(() => {
                let wines = this.state.wines.filter((wine) => {
                    return _id !== wine._id;
                });
                this.setState(state => {
                    state.wines = wines;
                    return state
                });
            })
            .catch((err) => {
                console.error('err', err);
            });
    }
    render() {
        return (
            <div className="container">
                <center><h1>Wine List</h1></center>
                <div class="card text-white bg-primary mb-3">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                {this.state.wines.map((wine) => (
                    <div class="card mb-3">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={"..."} class="card-img" alt={"..."}/>
                            </div>
                            <div className ="col-md-8">
                                <div className="card-body">
                                    <div className="card text-white bg-info card-wine" key={wine._id.toString()}>
                                        <div className="card-title">
                                            <h5 className="card-text"><a href={wine.links.self}>{wine.name}</a></h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><a href={wine.links.FilterByThisVineyard}>{wine.vineyard}</a></h6>
                                            <p className="card-text">{wine.notes}</p>
                                            <button className="btn-danger" onClick={() => this.handleDeletWine(wine._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    };
}

function ViewWineList() {
    return <div className="ViewWineList">
        <NavBar />
        <WineList />
    </div>
}

export default ViewWineList;