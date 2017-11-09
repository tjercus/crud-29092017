import React from "react";

const PersonFormView = (person, onChangeHandler, onSaveHandler) => (
  <div>
    <div className="card horizontal">
      <div className="card-image">
        <img src="img/user-male-silhouette.jpg" alt="male" style={{width: "100px", margin: "1em"}} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <div className="input-field">
            <input placeholder="Placeholder"
                   id="name"
                   type="text"
                   className="validate"
                   value={person.name}
                   onChange={onChangeHandler} />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="card-action">
          <button className="waves-effect waves-light btn"
                  onClick={onSaveHandler}>save</button>
        </div>
      </div>
    </div>
  </div>
);

export default PersonFormView;