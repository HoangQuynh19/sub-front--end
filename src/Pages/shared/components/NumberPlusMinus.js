import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function GroupedButtons(props){
    const {defaultValue, min, max} = props
    const [value, setValue] = useState(defaultValue ? defaultValue : 0);
    const handleChangeValue = (step) => () => {
        setValue(value + step)
    };
    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleChangeValue(-1)} disabled={value <= min}>-</Button>
        <Button disabled>{value}</Button>
        <Button onClick={handleChangeValue(1)} disabled={value >= max}>+</Button>
      </ButtonGroup>
    );
}

export default GroupedButtons;
