import { styled, TextField } from '@mui/material';
import React from 'react';

const CustomTextField = ({
    placeholder,
    value,
    onChange,
 
    type = 'text',
}) => {
    return (
            <MyTextField 
            onChange={onChange} 
            placeholder={placeholder} 
            value={value} 
            type={type}
            />
    );
};
const MyTextField = styled(TextField)(({ theme }) => ({
    width: "480px",
    boxSizing: "border-box",
    height: "44px",
    justifyContent: "center",
    padding: "10px 8px",
    gap: 8,
    borderRadius: "25px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    margin: "25px",
    "& .MuiOutlinedInput-root": {
      boxSizing: "border-box",
      borderRadius: "12px",
      paddingRight: "8px",
      height: "55px",
      "& fieldset": {
        border: "1px solid black",
        height: "100%",
      },

      "& input": {
        width: "100%",
        boxSizing: "border-box",
        height:"100%",
      },
    },

    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
      border: "1px solid black",
    },
  }));
  

export default CustomTextField;