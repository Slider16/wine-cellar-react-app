import React, { useState, useEffect } from "react";
import wineStore from "../stores/wineStore";
import WineGrid from "./WineGrid";
import WineForm from "./WineForm";
import * as wineActions from "../actions/wineActions";
import { toast } from "react-toastify";
import { deleteWine } from "../actions/wineActions";

// Another way to declare "functional" components is to use an arrow function like so
const EditWinesPage = props => {
  const [errors, setErrors] = useState({});
  const [wines, setWines] = useState(wineStore.getWines());
  const [wine, setWine] = useState({
    slug: "",
    name: "",
    vineyard: "",
    bin: "",
    year: ""
  });

  useEffect(() => {
    // Run the addChangeListener when the wineStore changes
    wineStore.addChangeListener(onChange);
    const slug = props.match.params.slug; // from the path '/wines/:slug'

    // if (wineStore.getWines().length === 0) {
    if (wines.length === 0) {
      wineActions.loadWines();
    } else if (slug) {
      setWine(wineStore.getWineBySlug(slug));
    }

    window.scrollTo(0, 0);

    // cleanup on unmount
    return () => wineStore.removeChangeListener(onChange);

    // when the wines.length changes or the slug on params changes, useEffect() will be run again.
  }, [wines.length, props.match.params.slug]);

  function onChange() {
    setWines(wineStore.getWines());
  }

  function handleChange({ target }) {
    setWine({
      ...wine,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!wine.name) _errors.name = "Name is required";
    if (!wine.vineyard) _errors.vineyard = "Vineyard is required";
    if (!wine.bin) _errors.bin = "Bin is required";
    if (!wine.year) _errors.year = "Year is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    wineActions.saveWine(wine).then(() => {
      props.history.push("/editwines");
      toast.success("Wine saved.");
    });
  }

  return (
    <>
      <WineForm
        errors={errors}
        wine={wine}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <WineGrid wines={wines} deleteWine={deleteWine} />
    </>
  );
};

export default EditWinesPage;
