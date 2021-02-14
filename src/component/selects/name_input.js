import React from "react";
import TextField from "@material-ui/core/TextField";

function NameSelect() {
  const handleChange = (event) => {
    var text = event.target.value;
    var name = document.getElementById("name");
    name.innerText = text;
  };

  return (
    <TextField
      id="name-input"
      type="text"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      margin="dense"
      defaultValue=""
      placeholder="Name ..."
      fullWidth
      onChange={handleChange}
    />
  );
}

export default NameSelect;