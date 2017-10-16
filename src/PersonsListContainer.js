import PropTypes from 'prop-types';
import React from "react";
import PersonsListView from "./PersonsListView";

class PersonsListContainer extends React.Component {

  static propTypes = {
    personStore: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.props.personStore.addSubscriber(this);

    this.state = {
      selectedId: null
    };
  }

  onStoreChange = () => {
    this.setState(this.getSelectedPersonId);
    console.log("PersonsListContainer", this.props.personStore.getSelectedPerson());
  };

  personClickHandler = evt => {
    console.log(evt.target.value);
    this.props.personStore.dispatch({type: "SELECT_PERSON", payload: evt.target.value});
  };

  addPersonClickHandler = () => {
    this.props.personStore.dispatch({type: "ADD_PERSON"});
  };
  delPersonClickHandler = id => {
    console.log("delPersonClickHandler", id);
    this.props.personStore.dispatch({type: "DELETE_PERSON", payload: id});
  };

  getSelectedPersonId = (state, props) => {
    return { selectedId: this.props.personStore.getSelectedPersonId };
  };

  render() {
    return PersonsListView(this.props.personStore.getPeople(),
      this.state.selectedId,
      {personClickHandler: this.personClickHandler,
        addPersonClickHandler: this.addPersonClickHandler,
        delPersonClickHandler: this.delPersonClickHandler});
  }

}

export default PersonsListContainer;
