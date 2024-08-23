import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function Scores({star , setStar}:any) {

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={star}
        className="text-[#c0aa83]"
        onChange={(event:any, newValue) => {
          setStar(event.target.value);
        }}
      />
    </Box>
  );
}
