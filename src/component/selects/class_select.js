import React, { useState } from "react";
import Select from "react-select";
import ReactDOM from 'react-dom';

import MageCb from "../checkboxes/mage_cb";
import HunterCb from "../checkboxes/hunter_cb";
import WarriorCb from "../checkboxes/warrior_cb";

const SelectFunctionalComponent = (props) => {
  const [text, setText] = useState("Select ...");

  const onChange = (selectedOption) => {
    setText(selectedOption);
    //console.log(`Option selected:`, selectedOption);

     var prof = document.getElementById("class");
    prof.innerText = selectedOption.value;

    var parts = document.getElementById("parts");
parts.innerText = "";

    // var m = document.getElementById("mage");
    // var h = document.getElementById("hunter");
    // var w = document.getElementById("warrior");
    var c = document.getElementById("class_cb");


    if (selectedOption.label == "Mage") {
      // m.innerHTML = ""
      // h.innerHTML = ""
      // w.innerHTML = ""
      //c.empty()
      ReactDOM.render(<MageCb/>,c)
      // m.style.display = "block";
      // h.style.display = "none";
      // w.style.display = "none";
    }
    if (selectedOption.label == "Hunter") {
      // m.innerHTML = ""
      // h.innerHTML = ""
      // w.innerHTML = ""
      //c.empty()
      ReactDOM.render(<HunterCb/>,c)
      // m.style.display = "none";
      // h.style.display = "block";
      // w.style.display = "none";
    }
    if (selectedOption.label == "Warrior") {
      // m.innerHTML = ""
      // h.innerHTML = ""
      // w.innerHTML = ""
      //c.empty()
      ReactDOM.render(<WarriorCb/>,c)
      // m.style.display = "none";
      // h.style.display = "none";
      // w.style.display = "block";
    }
  };

  return (
    <Select
      id="class-select"
      options={props.options}
      onChange={onChange}
      value={text}
    />
  );
};

export default SelectFunctionalComponent;
