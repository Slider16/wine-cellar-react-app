import React from "react";
// import "../styles/AddEditWineForm.css";
import NavBar from "./NavBar";
import WineGrid from "./WineGrid";

class WineForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vineyard: '',
            location: '',
            year: '',
            bin: '',
            purchasePrice: '',
            sellPrice: '',
            notes: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        // For resetting all form fields after submission
        this.baseState = this.state;
    }
    handleSubmit(event) {
        // prevent the form from being submitted
        event.preventDefault();
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers: headers,           
            body: JSON.stringify(this.state)
        };

        const request = new Request('http://localhost:5000/api/wines', options);
        fetch(request)
        .then(() => {

        })      

        console.log(this.state);                
        this.resetForm();
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    resetForm = () => {
        this.setState(this.baseState);
    }
    render() {
        return <form id="AddEditWineForm" onSubmit={this.handleSubmit}>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" className="form-control" name="name" placeholder="Name"  value={this.state.name} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="vineyard">Vineyard</label> */}
                <input type="text" className="form-control" name="vineyard" placeholder="Vineyard" value={this.state.vineyard} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="location">Location</label> */}
                <input type="text" className="form-control" name="location" placeholder="Location" value={this.state.location} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="year">Year</label> */}
                <input type="text" className="form-control" name="year" placeholder="Year" value={this.state.year} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="bin">Bin</label> */}
                <input type="text" className="form-control" name="bin" placeholder="Bin" value={this.state.bin} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="purchasePrice">Purchase Price</label> */}
                <input type="text" className="form-control" name="purchasePrice" placeholder="Purchase Price" value={this.state.purchasePrice} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="sellPrice">Sell Price</label> */}
                <input type="text" className="form-control" name="sellPrice" placeholder="Sell Price" value={this.state.sellPrice} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                {/* <label htmlFor="notes">Notes</label> */}
                <textarea className="form-control"  name="notes" placeholder="Notes" value={this.state.notes} onChange={this.onFieldChange} />
            </div>
            <div className="form-group col-sm-4">
                <input className="btn btn-primary" type="submit" value="Submit" />
            </div>            
        </form>
    }
}

function AddEditWineForm(onAddWine) {
    return <div className="AddEditWineForm">
        <NavBar />
        <h1>Add/Edit Wine</h1>
        <WineForm />
        <WineGrid state />
        {/* <WineForm onAddWine={onAddWine} /> */}
    </div>
}


export default AddEditWineForm;