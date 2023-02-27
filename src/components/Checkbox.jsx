import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  const text = (e) => {
    console.log(e.target.checked);
    console.log("CheckboxLabels");
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="xd"
        onChange={text}
      />
    </FormGroup>
  );
}
