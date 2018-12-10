import React from "react";
import PropTypes from "prop-types";

import PersonView from "./PersonFormView";

class PersonFormContainer extends React.Component {
  static propTypes = {
    personStore: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.props.personStore.addSubscriber(this);

    this.state = {
      person: { name: "" }
    };
  }

  saveClickHandler = evt => {
    evt.preventDefault();
    this.props.personStore.dispatch({
      type: "UPDATE_PERSON",
      payload: this.state.person
    });
  };

  onStoreChange = () => {
    this.setState(this.getSelectedPerson);
  };

  onChangeHandler = evt => {
    const sp = this.props.personStore.getSelectedPerson();
    sp.name = evt.target.value;
    this.setState({ person: sp });
  };

  getSelectedPerson = (state, props) => {
    return { person: this.props.personStore.getSelectedPerson() };
  };

  render() {
    if (this.props.personStore.getSelectedPerson()) {
      return PersonView(
        this.state.person,
        this.onChangeHandler,
        this.saveClickHandler
      );
    } else {
      return "";
    }
  }
}

export default PersonFormContainer;
