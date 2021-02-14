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

     var res = document.getElementById("res2");
    res.innerText = event.target.value;
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Second Res</FormLabel>
        <RadioGroup
          row
          aria-label="Focused Res"
          name="focused_res"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="fire"
            control={<Radio />}
            label="Fire Resistance"
          />
          <FormControlLabel
            value="water"
            control={<Radio />}
            label="Water Resistance"
          />
          <FormControlLabel
            value="wind"
            control={<Radio />}
            label="Wind Resistance"
          />
          <FormControlLabel
            value="earth"
            control={<Radio />}
            label="Earth Resistance"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

