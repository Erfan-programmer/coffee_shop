"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
function valuetext(value: number) {
  return `${value.toLocaleString()}°C`;
}

export default function RangeSlider({slideRange}:any) {
  const [value, setValue] = useState<number[]>([500_000 , 0]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    slideRange(newValue)
  };

  return (
    <Box sx={{ width: "80%" , marginInline:"auto"}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        min={0}
        max={1_000_000}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        valueLabelFormat={value=> <div className='faNum'>{value.toLocaleString()}</div>}
      />
    </Box>
  );
}
