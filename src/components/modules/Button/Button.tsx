"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { Grid } from "@mui/material";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#c0aa83",
  width:"100%",
  colorScheme: "white",
  "&:hover": {
    backgroundColor: "#71644d",
  },
}));

export default function CustomizedButtons({ title, color }: any) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ColorButton  variant="contained" sx={{fontFamily:"faMedium" , fontWeight:"900" , fontSize:"1rem"}}>{title}</ColorButton>
      </Grid>
    </Grid>
  );
}
