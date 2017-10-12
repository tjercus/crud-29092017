// import * from "interfaces";

/**
 * Factory function to create a store
 * @returns {{getPeople: (function()), getPerson: (function(*)), setPerson: (function(*)), addPerson: (function(*=)), getSelectedPerson: (function()), notifySubscribers: (function()), addSubscriber: (function(*=)), dispatch: (function(*))}}
 * @constructor
 */
class PersonStore {

  constructor() {
    this.people = [
      {id: 1, name: "Dave"},
      {id: 2, name: "John"},
      {id: 3, name: "Paul"}
    ];

    this.selectedId = null;

    /**
     * Holds a list of ContainerComponents that would like to be notified when store state changes
     * @type {Array<Subscriber>}
     */
    this.subscribers = [];
  }

  getPeople() {
    return this.people;
  }

  getPerson(id) {
    return this.people.find(person => person.id === id);
  }

  setPerson(person) {
    const newPeople = [];
    this.people.forEach(_person => {
      if (_person.id === person.id) {
        newPeople.push(person);
      } else {
        console.log("test", _person.id, person.id);
        newPeople.push(_person);
      }
    });
    console.log("PersonStore.setPerson", newPeople);
    this.people = newPeople;
  };

  addPerson(person) {
    this.people.push(person);
  };

  getSelectedPersonId() {
    return this.selectedId;
  }

  getSelectedPerson() {
    const _person = this.getPerson(this.selectedId);
    console.log("PersonStore.getSelectedPerson", this.selectedId, _person);
    return _person;
  };

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  };

  notifySubscribers() {
    this.subscribers.map(subscriber => subscriber.onStoreChange());
  }

  dispatch(action) {
    console.log(action);
      switch (action.type) {
        case "SELECT_PERSON" :
          this.selectedId = action.payload;
          console.log("PersonStore.dispatch SELECT_PERSON", action.payload);
          this.notifySubscribers();
        break;
        case "UPDATE_PERSON" :
          this.setPerson(action.payload);
          console.log("PersonStore.dispatch UPDATE_PERSON", action.payload);
          this.notifySubscribers();
        break;
      }
    }
}

export default PersonStore;
