 import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault()
    //below we are putting together form into an object
    //using values stored in state
    const formData = {
      firstName : firstName,
      lastName : lastName,
    };
    const dataArray = [...submittedData, formData];
   setSubmittedData (dataArray);
   setFirstName('');
   setLastName('');
  }
    //a form, when submitted, should send the form data somewhere
    //in react we handle wit async javascript
    //so think of sendDataSomewhere as the code that handles sending this data off
    //this function can be defined in same form component OR can be passed down as prop
const listOfSubmissions = submittedData.map((data, index) => {
  return (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  )
})


  return (
    <div>
    <form onSubmit = {handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    <h3>Submissions</h3>
    {listOfSubmissions}
    </div>
  );
}

export default Form;
