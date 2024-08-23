import React from "react";
import TextField from '@mui/material/TextField';
type InputType = {
    value:string,
    setValue:any
}
const Input = ({value , setValue}:InputType) => {
  return(

    <TextField
      hiddenLabel
      sx={{
        backgroundColor:"white",
        color:"#212121",
        width:"100%",
        fontFamily:"faMedium"
      }}
      id="filled-hidden-label-small"
      value={value ? value : ""}
      variant="filled"
      onChange={(event) => setValue(event?.target.value)}
      size="small"
    />
    )
};

export default Input;
