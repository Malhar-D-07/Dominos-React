import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

/**
 *
 * @param {{
 * label: string,
 * name: string,
 * helperText: string,
 * defaultValue: string,
 * error: boolean,
 * type: "text" | "password",
 * disabled: boolean,
 * readOnly: boolean,
 * adornment: boolean,
 * adormentPosition: "start" | "end",
 * onChange: function
 * adornmentElement:
 * }} props Props for the component
 */
export default function OutlinedTextField(props) {
  return (
    <>
      <TextField
        required={props.required || false}
        disabled={props.disabled || false}
        type={props.type || "text"}
        id={props.id || "outlined-textfield"}
        InputProps={{
          readOnly: props.readOnly || false,
          startAdornment: props.adornment ? (
            <InputAdornment position={props.adormentPosition}>
              {props.adornmentElement}
            </InputAdornment>
          ) : null,
        }}
        label={props.label || "Default Label"}
        helperText={props.helperText || ""}
        defaultValue={props.defaultValue || ""}
        error={props.error || false}
        fullWidth={true}
        name={props.name || "defaultName"}
        onChange={props.onChange || null}
      />
    </>
  );
}
