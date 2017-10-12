import PropTypes from 'prop-types';
import React from "react";

const List = children => (<ul className="collection with-header">
  <li className="collection-header">
    <h4>People</h4>
  </li>
  {children}
  </ul>
);

const ListItem = (person, selectedId, personClickHandler) =>
  <li key={person.id}
      value={person.id}
      className={(person.id === selectedId) ? "collection-item active" : "collection-item"}
      onClick={personClickHandler}>
    {person.name}
  </li>;

const PersonsList = (people, selectedId, personClickHandler) => {
  // return List(people.map(ListItem));
  return List(people.map(person => {
    console.log("selectedId", selectedId);
    return ListItem(person, selectedId, personClickHandler)
  }));
};

PersonsList.propTypes = {
  people: PropTypes.instanceOf(Array).isRequired,
  selectedId: PropTypes.number.isRequired,
  personClickHandler: PropTypes.func.isRequired,
};

export default PersonsList;