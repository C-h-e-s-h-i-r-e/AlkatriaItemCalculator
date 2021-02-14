import React from "react";
import TextField from "@material-ui/core/TextField";

function LvlSelect() {
  const handleChange = (event) => {
    var name = event.target.valueAsNumber;
    var lvl = document.getElementById("lvl");
    lvl.innerText = name;
  };

  return (
    <TextField
      id="lvl-input"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      margin="dense"
      defaultValue="0"
      fullWidth
      onChange={handleChange}
    />
  );
}

export default LvlSelect;
