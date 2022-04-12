import React, { useState } from "react";
import "./todo.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [feedback, setFeedback] = useState("");

  const [allEntry, setAllEntry] = useState([]);
  const clearForm = () => {
    setName("");
    setEmail("")
    setGender("")
    setFeedback("")
  }
  const submitform = (e) => {
    e.preventDefault();

    const newEntry = { gender: gender, name: name, feedback: feedback };
    if(name !== "" && gender !== "" && feedback !== "") {
      setAllEntry([...allEntry, newEntry]);
      clearForm()
    }
  };
  return (
    <div className="container p-4 rounded">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Feedback Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <form action="" onSubmit={submitform}>
            <div className="mb-3 d-flex flex-column align-items-start">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex flex-column align-items-start">
              <label className="form-label" htmlFor="name">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex justify-content-start">
              <span className="me-4">Gender: </span>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Mr."
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="inlineRadio2"
                  value="Mrs."
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                 Female
                </label>
              </div>
            </div>
            <div className="mb-3 d-flex flex-column align-items-start">
              <label className="form-label" htmlFor="feedback">
                Feedback
              </label>
              <textarea
                className="form-control"
                rows="3"
                autoComplete="off"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-success w-100">Submit</button>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-12">
          {allEntry.map((curElem, index) => {
            return (
              <div key={index} className="showdatastyles text-start">
                <h3 className="mb-1">
                  <p className="mb-0">{curElem.gender + " " + curElem.name} says</p>
                </h3>
                <p>{curElem.feedback}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Form;
