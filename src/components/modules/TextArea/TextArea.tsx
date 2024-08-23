import React from "react";
import Textarea from "@mui/joy/Textarea";
import { PiPlaceholder } from "react-icons/pi";
type TextareaType = {
    value:string,
    setValue:any
}
const TextArea = ({value , setValue}:TextareaType) => {
  return <Textarea sx={{width:"100%" , backgroundColor:"white" , fontFamily:"faMedium"}} color="primary" minRows={2} size="lg" value={value} onChange={(event:any)=> setValue(event?.target.value)} />;
};

export default TextArea;
