import React, { useState } from "react";
import Select from "react-select";

const SelectFunctionalComponent2 = (props) => {
  const [text, setText] = useState("Select ...");

  const onChange = (selectedOption) => {
    setText(selectedOption);
    //console.log(`Option selected:`, selectedOption);

     var origin = document.getElementById("origin");
    origin.innerText = selectedOption.value;
  };

  return (
    <Select
      id="origin-select"
      options={props.options}
      onChange={onChange}
      value={text}
    />
  );
};

export default SelectFunctionalComponent2;
