import React, { useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup() {
    const [value, setValue] = React.useState("10_10");

    const handleChange = (event) => {
        setValue(event.target.value);

        var ratio = document.getElementById("ratio");
        ratio.innerText = event.target.value;
    };

    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Basic Stat Ratio</FormLabel>
                <RadioGroup
                    row
                    aria-label="Ratio"
                    name="ratio"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        value="05_15"
                        control={<Radio />}
                        label="0.5 : 1.5"
                    />
                    <FormControlLabel
                        value="06_14"
                        control={<Radio />}
                        label="0.6 : 1.4"
                    />
                    <FormControlLabel
                        value="07_13"
                        control={<Radio />}
                        label="0.7 : 1.3"
                    />
                    <FormControlLabel
                        value="08_12"
                        control={<Radio />}
                        label="0.8 : 1.2"
                    />
                    <FormControlLabel
                        value="09_11"
                        control={<Radio />}
                        label="0.9 : 1.1"
                    />
                    <FormControlLabel
                        value="10_10"
                        control={<Radio />}
                        label="1.0 : 1.0"
                    />
                    <FormControlLabel
                        value="11_09"
                        control={<Radio />}
                        label="1.1 : 0.9"
                    />
                    <FormControlLabel
                        value="12_08"
                        control={<Radio />}
                        label="1.2 : 0.8"
                    />
                    <FormControlLabel
                        value="13_07"
                        control={<Radio />}
                        label="1.3 : 0.7"
                    />
                    <FormControlLabel
                        value="14_06"
                        control={<Radio />}
                        label="1.4 : 0.6"
                    />
                    <FormControlLabel
                        value="15_05"
                        control={<Radio />}
                        label="1.5 : 0.5"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
