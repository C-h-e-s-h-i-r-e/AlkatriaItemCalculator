import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);
  const [arr, setArr] = React.useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    var name = event.target.name.toString()
   
if(!arr.includes(name)){
    arr.push(name);
}else{
    
    arr.splice(arr.indexOf(name), 1);
    
}
//console.log(arr);
var parts = document.getElementById("parts");
parts.innerText = arr;
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="boots" color="primary" />
        }
        label="Boots"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="armor" color="primary" />
        }
        label="Armor"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="helmet" color="primary" />
        }
        label="Helmet"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="gloves" color="primary" />
        }
        label="Gloves"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="shield" color="primary" />
        }
        label="Shield"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="ring" color="primary" />
        }
        label="Ring"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="necklace" color="primary" />
        }
        label="Necklace"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="one_hand_sword" color="primary" />
        }
        label="One Hand Sword"
      />

      <FormControlLabel
        control={
          <Checkbox onChange={handleChange} name="two_hand_sword" color="primary" />
        }
        label="Two Hand Sword"
      />
    </div>
  );
}