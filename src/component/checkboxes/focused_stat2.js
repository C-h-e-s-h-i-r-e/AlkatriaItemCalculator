import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("Select ...");


  const handleChange = (event) => {
    setValue(event.target.value);

    var stat2 = document.getElementById("stat2");
    stat2.innerText = event.target.value;
  };

  return (
      <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Second Stat</FormLabel>
      <RadioGroup row
        aria-label="Focused Stat"
        name="focused_stat"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="attack_speed"
          control={<Radio />}
          label="Attack Speed"
        />
        <FormControlLabel
          value="crit"
          control={<Radio />}
          label="Critical Hit"
        />
        <FormControlLabel
          value="life_steal"
          control={<Radio />}
          label="Life Steal"
        />
      </RadioGroup>
           </FormControl>    
    </div>
  );
}
