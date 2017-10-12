import PropTypes from 'prop-types';
import React from "react";
import PersonsList from "./PersonsList";

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

  getSelectedPersonId = (state, props) => {
    return { selectedId: this.props.personStore.getSelectedPersonId };
  };

  render() {
    return PersonsList(this.props.personStore.getPeople(),
      this.state.selectedId,
      this.personClickHandler);
  }

}

export default PersonsListContainer;
