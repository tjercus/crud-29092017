import PropTypes from "prop-types";
import React from "react";

const List = (children, eventhandlers) => (
  <ul className="collection with-header">
    <li className="collection-header">
      <h4>People</h4>
    </li>
    {children}
    <button onClick={eventhandlers.addPersonClickHandler}
            className="waves-effect waves-light btn">
      Add a person
    </button>
  </ul>
);

// personClickHandler, delPersonClickHandler
const ListItem = (person, selectedId, eventhandlers) => (
  <li
    key={person.id}
    value={person.id}
    className={
      String(person.id) === String(selectedId) ? "collection-item active" : "collection-item"
    }
    onClick={eventhandlers.personClickHandler}
  >
    {person.name}
    <a
      href="#"
      className="secondary-content"
      onClick={() => eventhandlers.delPersonClickHandler(person.id)}
    >
      <i className="material-icons">delete</i>
    </a>
  </li>
);

// TODO group handlers in an object and use spread operator to destructure
// personClickHandler, addPersonClickHandler, delPersonClickHandler
const PersonsListView = (people, selectedId, eventhandlers) => {
  // return List(people.map(ListItem));
  return List(people.map(person => {
      console.log("selectedId", selectedId);
      return ListItem(person, selectedId, eventhandlers);
      // return ListItem(person, selectedId, personClickHandler, delPersonClickHandler)
    }), eventhandlers);
};

PersonsListView.propTypes = {
  people: PropTypes.instanceOf(Array).isRequired,
  selectedId: PropTypes.number.isRequired,
  eventhandlers: PropTypes.object.isRequired
  // personClickHandler: PropTypes.func.isRequired,
  // addPersonClickHandler: PropTypes.func.isRequired,
  // delPersonClickHandler: PropTypes.func.isRequired,,
};

export default PersonsListView;
