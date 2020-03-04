import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function WineForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        onChange={props.onChange}
        name="name"
        value={props.wine.name}
        error={props.errors.name}
      />
      <TextInput
        id="vineyard"
        label="Vineyard"
        onChange={props.onChange}
        name="vineyard"
        value={props.wine.vineyard}
        error={props.errors.vineyard}
      />
      <TextInput
        id="bin"
        label="Bin"
        onChange={props.onChange}
        name="bin"
        value={props.wine.bin}
        error={props.errors.bin}
      />
      <TextInput
        id="year"
        label="Year"
        onChange={props.onChange}
        name="year"
        value={props.wine.year}
        error={props.errors.year}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

WineForm.propTypes = {
  wine: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default WineForm;
